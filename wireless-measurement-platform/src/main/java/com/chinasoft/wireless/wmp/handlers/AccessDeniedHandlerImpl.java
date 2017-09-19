package com.chinasoft.wireless.wmp.handlers;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;

public class AccessDeniedHandlerImpl implements AccessDeniedHandler
{
    
    @Override
    public void handle(HttpServletRequest request,
        HttpServletResponse response,
        AccessDeniedException accessDeniedException)
        throws IOException, ServletException
    {
        if (!response.isCommitted())
        {
            response.setContentType("text/json; charset=UTF-8");
            PrintWriter writer = response.getWriter();
            writer.println("{\"status\":3,\"result\":\"您没有权限访问此资源，请向管理员申请相应权限！\",\"success\":false}");
            writer.flush();
        }
    }
}
