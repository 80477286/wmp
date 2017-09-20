package com.chinasoft;

import com.mouse.web.supports.mvc.bind.annotation.JSON;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

@Controller
public class GlobalController {
    @RequestMapping({"/index", "/"})
    public String index() {
        return "index";
    }

    @RequestMapping({"/management"})
    public String management() {
        return "management";
    }

    @RequestMapping({"/project"})
    public String project() {
        return "project";
    }

    @RequestMapping({"/po"})
    public String po() {
        return "po";
    }

    @RequestMapping({"/organization"})
    public String organization() {
        return "organization";
    }

    @RequestMapping({"/get_current_user"})
    @ResponseBody
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
    @ResponseBody
    @JSON
    public Object getLocalhost(HttpServletRequest request) {
        String host = request.getRemoteHost();
        return host;
    }
}
