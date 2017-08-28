package com.huawei.wireless.wrmp;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

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
