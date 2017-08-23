package com.huawei.wireless.wrmp;

import com.mouse.web.supports.mvc.argumentsresolver.EntityParamListMethodArgumentResolver;
import com.mouse.web.supports.mvc.argumentsresolver.EntityParamMethodArgumentResolver;
import com.mouse.web.supports.mvc.converter.JsonResultHttpMessageConverter;
import com.mouse.web.supports.mvc.returnhandler.JsonResultReturnHandler;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by user on 2017/8/23.
 */
@Configuration
public class CustomWebMvcConfigurerAdapter extends WebMvcConfigurerAdapter {
//    @Override
//    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
//        argumentResolvers.add(new EntityParamListMethodArgumentResolver());
//        argumentResolvers.add(new EntityParamMethodArgumentResolver());
//        super.addArgumentResolvers(argumentResolvers);
//    }
//
//    @Override
//    public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> returnValueHandlers) {
//        List<HttpMessageConverter<?>> converters = new ArrayList<HttpMessageConverter<?>>(1);
//        converters.add(new JsonResultHttpMessageConverter());
//        returnValueHandlers.add(new JsonResultReturnHandler(converters));
//        super.addReturnValueHandlers(returnValueHandlers);
//    }
//
//    @Override
//    public void extendMessageConverters(List<HttpMessageConverter<?>> converters) {
//        converters.add(0, new JsonResultHttpMessageConverter());
//        super.extendMessageConverters(converters);
//    }
}
