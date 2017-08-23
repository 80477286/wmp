package com.huawei.wireless.wrmp.authorization;

import com.huawei.wireless.wrmp.authorization.handlers.MyAccessDeniedHandler;
import com.mouse.web.authorization.ldap.WebLdapSecurityConfigurerAdapter;
import com.mouse.web.authorization.ll.WebLdapAndLocalSecurityConfigurerAdapter;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.access.intercept.FilterSecurityInterceptor;
import org.springframework.util.StringUtils;

import java.util.Arrays;

/**
 * Created by cwx183898 on 2017/8/9.
 */
@Configuration
public class SecurityConfiguration extends WebLdapAndLocalSecurityConfigurerAdapter {
    private static final Log LOGGER = LogFactory.getLog(SecurityConfiguration.class);
    @Autowired
    private MyAccessDeniedHandler accessDeniedHandler;

    @Override
    public String getPermits() {
        return "/,/about,/index,/index.html,/**/*.css,/**/*.js,/**/*.gif,/**/*.jpg,/**/*.bmp,/**/*.png,/**/*.ico";
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        String permits = this.getPermits();
        String[] matchers = StringUtils.isEmpty(permits) ? new String[0] : getPermits().split("[,]");
        LOGGER.info("自定义免验证地址列表：" + Arrays.toString(matchers));
        http.authenticationProvider(getAuthenticationProvider()).addFilterBefore(filter, FilterSecurityInterceptor.class)
                .authorizeRequests()
                .antMatchers(matchers).permitAll()
                .anyRequest().authenticated()
                .and().formLogin().loginPage("/login").permitAll()
                .and().logout().permitAll()
                .and().exceptionHandling().accessDeniedHandler(accessDeniedHandler)
                .and().csrf().disable();
    }
}
