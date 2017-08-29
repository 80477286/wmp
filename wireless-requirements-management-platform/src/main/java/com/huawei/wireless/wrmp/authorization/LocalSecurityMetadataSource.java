package com.huawei.wireless.wrmp.authorization;

import org.apache.log4j.Logger;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.web.FilterInvocation;
import org.springframework.security.web.access.intercept.FilterInvocationSecurityMetadataSource;
import org.springframework.stereotype.Service;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.PathMatcher;

import java.util.ArrayList;
import java.util.Collection;


@Service
public class LocalSecurityMetadataSource implements
        FilterInvocationSecurityMetadataSource {
    protected static final Logger LOG = Logger
            .getLogger(LocalSecurityMetadataSource.class);


    protected PathMatcher antPathMatcher = new AntPathMatcher();


    /**
     * 从数据库中查询所有有效资源
     *
     * @return
     */
    public Collection<ConfigAttribute> getAllConfigAttributes() {
        LOG.debug("获取资源列表:getAllConfigAttributes()");
        Collection<ConfigAttribute> configAttributes = new ArrayList<ConfigAttribute>();
        return configAttributes;
    }

    public boolean supports(Class<?> clazz) {
        return true;
    }

    // 返回所请求资源所需要的权限(对应系统中的角色)
    @Override
    public Collection<ConfigAttribute> getAttributes(Object object)
            throws IllegalArgumentException {
        String requestUrl = getUrl(object);
        Collection<ConfigAttribute> roles = new ArrayList<ConfigAttribute>();
        return roles;
    }

    /**
     * 处理带有扩展名的URL(.action/.jsp等)
     *
     * @param object
     * @return
     */
    private String getUrl(Object object) {
        FilterInvocation filterInvocation = (FilterInvocation) object;
        String requestUrl = filterInvocation.getRequestUrl();
        LOG.debug("Request URL:" + requestUrl);
        return requestUrl;
    }


    public static class RoleConfigAttribute implements ConfigAttribute {
        private String id;

        public RoleConfigAttribute(String id) {
            this.id = id;
        }

        @Override
        public String getAttribute() {
            return id;
        }
    }

    public static class ResourceConfigAttribute implements ConfigAttribute {
        private String id;
        private String url;

        public ResourceConfigAttribute(String id, String url) {
            this.id = id;
            this.url = url;
        }

        @Override
        public String getAttribute() {
            return id;
        }

        public String getUrl() {
            return url;
        }
    }
}
