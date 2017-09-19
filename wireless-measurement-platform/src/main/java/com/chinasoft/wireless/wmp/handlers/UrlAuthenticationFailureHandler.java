package com.chinasoft.wireless.wmp.handlers;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;

public class UrlAuthenticationFailureHandler extends
    SimpleUrlAuthenticationFailureHandler
{
    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
        HttpServletResponse response, AuthenticationException exception)
        throws IOException, ServletException
    {
        if (!response.isCommitted())
        {
            response.setContentType("text/json; charset=UTF-8");
            PrintWriter writer = response.getWriter();
            writer.println("{\"status\":2,\"result\":\""
                + exception.getMessage() + "\",\"success\":false}");
            writer.flush();
        }
    }
}
