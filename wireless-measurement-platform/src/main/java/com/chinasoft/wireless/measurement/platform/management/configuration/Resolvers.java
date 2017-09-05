package com.chinasoft.wireless.measurement.platform.management.configuration;

import com.mouse.web.supports.mvc.argumentsresolver.EntityParamMethodArgumentResolver;
import com.mouse.web.supports.mvc.argumentsresolver.MapParamMethodArgumentResolver;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import java.util.List;

//@Configuration
public class Resolvers extends WebMvcConfigurationSupport {
    @Override
    protected void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
        super.addArgumentResolvers(argumentResolvers);
        argumentResolvers.add(new EntityParamMethodArgumentResolver());
        argumentResolvers.add(new MapParamMethodArgumentResolver());
    }
}
