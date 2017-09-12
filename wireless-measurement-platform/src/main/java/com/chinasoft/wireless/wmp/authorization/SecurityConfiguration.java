package com.chinasoft.wireless.wmp.authorization;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.WebMvcSecurityConfiguration;
import org.springframework.security.web.access.intercept.FilterSecurityInterceptor;
import org.springframework.util.StringUtils;

import java.util.Arrays;

/**
 * Created by cwx183898 on 2017/8/9.
 */
@Configuration
@EnableOAuth2Sso
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    private static final Log LOGGER = LogFactory.getLog(SecurityConfiguration.class);
    @Autowired
    private LocalSecurityMetadataSource securityMetadataSource;
    @Autowired
    private LocalAccessDecisionManager accessDecisionManager;

    private String permits = "/**/*.css,/**/*.js,/**/*.gif,/**/*.jpg,/**/*.bmp,/**/*.png,/**/*.ico";


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        String[] matchers = StringUtils.isEmpty(getPermits()) ? new String[0] : getPermits().split("[,]");
        LOGGER.info("自定义免验证地址列表：" + Arrays.toString(matchers));
        http.addFilterBefore(filterSecurityInterceptor(), FilterSecurityInterceptor.class);
        http.authorizeRequests().antMatchers(matchers).permitAll();
        http.authorizeRequests().anyRequest().authenticated();
        http.formLogin().loginPage("/login").permitAll();
        http.logout().logoutSuccessUrl("/").permitAll();
        http.csrf().disable();//csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
    }

    public LocalSecurityFilter filterSecurityInterceptor() throws Exception {
        LocalSecurityFilter fsi = new LocalSecurityFilter();
        fsi.setSecurityMetadataSource(securityMetadataSource);
        fsi.setAccessDecisionManager(accessDecisionManager);
        fsi.afterPropertiesSet();
        return fsi;
    }

    private String getPermits() {
        return permits;
    }
}
