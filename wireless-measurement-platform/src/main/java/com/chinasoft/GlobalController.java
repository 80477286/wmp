package com.chinasoft;

import com.chinasoft.wireless.wmp.authorization.user.service.UserService;
import com.mouse.web.supports.mvc.bind.annotation.JSON;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    private UserService versionService;

    @RequestMapping({"/get_current_user"})
    @JSON
    public LinkedHashMap getCurrentUser() {
        LinkedHashMap user = versionService.getCurrentUser();
        return user;
    }


    @RequestMapping({"/get_localhost"})
    @JSON
    public Object getLocalhost(HttpServletRequest request) {
        String host = request.getRemoteHost();
        return host;
    }
}
