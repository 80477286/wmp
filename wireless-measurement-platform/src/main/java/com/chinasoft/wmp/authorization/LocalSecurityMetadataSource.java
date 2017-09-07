package com.chinasoft.wmp.authorization;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.authentication.OAuth2AuthenticationDetails;
import org.springframework.security.web.FilterInvocation;
import org.springframework.security.web.access.intercept.FilterInvocationSecurityMetadataSource;
import org.springframework.stereotype.Service;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.PathMatcher;
import org.springframework.web.client.RestTemplate;

import java.util.*;


@Service
public class LocalSecurityMetadataSource implements
        FilterInvocationSecurityMetadataSource {
    @Value("${security.oauth2.resource.resources-uri}")
    private String resourcesUri;

    @Value("${security.oauth2.resource.resources-cachetime}")
    private int resourcesCachetime = 120;

    protected static final Logger LOG = Logger
            .getLogger(LocalSecurityMetadataSource.class);


    private RestTemplate restTemplate = new RestTemplate();

    protected PathMatcher antPathMatcher = new AntPathMatcher();
    private Map<String, List<String>> cachedResources = null;
    private Long cacheTimestamp = null;

    /**
     * 从数据库中查询所有有效资源
     *
     * @return
     */
    public Collection<ConfigAttribute> getAllConfigAttributes() {
        LOG.debug("获取资源列表:getAllConfigAttributes()");
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Collection<ConfigAttribute> configAttributes = new ArrayList<ConfigAttribute>();
        if (authentication != null && authentication.isAuthenticated()) {
            if (cachedResources == null || cacheTimestamp == null || (new Date().getTime() - cacheTimestamp) > resourcesCachetime * 1000) {
                if (OAuth2AuthenticationDetails.class.isAssignableFrom(authentication.getDetails().getClass())) {
                    String token = ((OAuth2AuthenticationDetails) authentication.getDetails()).getTokenValue();
                    cachedResources = (Map<String, List<String>>) restTemplate.getForObject(resourcesUri + "?access_token=" + token, Map.class);
                    cacheTimestamp = new Date().getTime();
                }
            }
            if (cachedResources != null) {
                Set<Map.Entry<String, List<String>>> entries = cachedResources.entrySet();
                for (Map.Entry<String, List<String>> entry : entries) {
                    configAttributes.add(new ResourceConfigAttribute(entry.getKey()));
                }
            }
        }
        return configAttributes;
    }


    public boolean supports(Class<?> clazz) {
        return true;
    }

    // 返回所请求资源所需要的权限(对应系统中的角色)
    @Override
    public Collection<ConfigAttribute> getAttributes(Object object)
            throws IllegalArgumentException {
        Collection<ConfigAttribute> cas = getAllConfigAttributes();
        String requestUrl = getUrl(object);
        Collection<ConfigAttribute> roles = new ArrayList<ConfigAttribute>();
        for (ConfigAttribute ca : cas) {
            boolean matched = antPathMatcher.match(ca.getAttribute(), requestUrl);
            if (matched) {
                List<String> list = cachedResources.get(ca.getAttribute());
                for (String item : list) {
                    roles.add(new RoleConfigAttribute(item));
                }
            }
        }
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
        private String url;

        public ResourceConfigAttribute(String url) {
            this.url = url;
        }

        public String getUrl() {
            return url;
        }

        @Override
        public String getAttribute() {
            return url;
        }
    }
}
