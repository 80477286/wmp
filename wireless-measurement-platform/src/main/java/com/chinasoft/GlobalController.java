package com.chinasoft;

import com.mouse.web.supports.mvc.bind.annotation.JSON;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.LinkedHashMap;

@RestController
public class GlobalController {
    @RequestMapping({"/get_current_user"})
    @JSON
    public Object getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && OAuth2Authentication.class.isAssignableFrom(authentication.getClass())) {
            OAuth2Authentication oa = (OAuth2Authentication) SecurityContextHolder.getContext().getAuthentication();
            LinkedHashMap details = (LinkedHashMap) oa.getUserAuthentication().getDetails();
            Object principal = details.get("principal");

            return principal;
        }
        return null;
    }


    @RequestMapping({"/get_localhost"})
    @JSON
    public Object getLocalhost(HttpServletRequest request) {
        String host = request.getRemoteHost();
        return host;
    }
}
