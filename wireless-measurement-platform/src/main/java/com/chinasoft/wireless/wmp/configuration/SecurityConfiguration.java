package com.chinasoft.wireless.wmp.configuration;

import com.chinasoft.wireless.wmp.authorization.LocalAccessDecisionManager;
import com.chinasoft.wireless.wmp.authorization.LocalSecurityFilter;
import com.chinasoft.wireless.wmp.authorization.LocalSecurityMetadataSource;
import com.chinasoft.wireless.wmp.handlers.Oauth2LogoutHandler;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.access.intercept.FilterSecurityInterceptor;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

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

    @Autowired
    private Oauth2LogoutHandler logoutHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.addFilterBefore(filterSecurityInterceptor(), FilterSecurityInterceptor.class);
        http.antMatcher("/**").authorizeRequests().anyRequest().authenticated();

        http.formLogin().loginPage("/login").permitAll();
        http.logout().permitAll().addLogoutHandler(logoutHandler).logoutSuccessHandler(new LogoutSuccessHandler() {
            @Override
            public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
                String redirect = request.getParameter("redirect");
                if (redirect == null || redirect.trim().isEmpty()) {
                    redirect = "/";
                }
                response.sendRedirect(redirect);
            }
        });

        http.csrf().disable();
    }


    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/**/*.ico", "/**/*.css", "/**/*.js", "/**/*.png", "/**/*.jpg", "/**/*.gif", "/**/*.bmp");
    }

    public LocalSecurityFilter filterSecurityInterceptor() throws Exception {
        LocalSecurityFilter fsi = new LocalSecurityFilter();
        fsi.setSecurityMetadataSource(securityMetadataSource);
        fsi.setAccessDecisionManager(accessDecisionManager);
        fsi.afterPropertiesSet();
        return fsi;
    }

}
