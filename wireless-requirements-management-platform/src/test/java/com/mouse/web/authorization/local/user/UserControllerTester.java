package com.mouse.web.authorization.local.user;

import com.huawei.wireless.wrmp.WrmpApplication;
import com.mouse.web.authorization.local.user.controller.UserController;
import com.mouse.web.authorization.local.user.model.User;
import com.mouse.web.authorization.local.user.service.IUserService;
import org.apache.commons.lang3.time.DateUtils;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.context.WebApplicationContext;

import java.util.Date;

/**
 * Created by cwx183898 on 2017/8/16.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = {WrmpApplication.class})
@Transactional
public class UserControllerTester {
    @Autowired
    private WebApplicationContext context;

    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private UserController userController;

    //mock api 模拟http请求
    private MockMvc mockMvc;

    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private IUserService userService;

    private User user;


    //初始化工作
    @Before
    public void setUp() {
        //独立安装测试
        //mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
        //集成Web环境测试（此种方式并不会集成真正的web环境，而是通过相应的Mock API进行模拟测试，无须启动服务器）
        mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
        User user = new User();
        user.setEmail("testmail");
        user.setUsername("testusername");
        user.setPassword("testpassword");
        user.setName("testname");
        user.setCreator("testSYSTEM");
        user.setLocked(false);
        user.setAccountExpiringDate(DateUtils.addYears(new Date(), 1));
        user.setCredentialsExpiringDate(DateUtils.addYears(new Date(), 1));
        this.user = userService.save(user);
        Assert.assertNotNull(this.user.getId());
    }

    //测试
    @Test
    // @WithMockUser(username = "fdsafd", roles = {"1", "2"})
    //@WithUserDetails("cwx183898")
    public void all() throws Exception {
        ResultActions result = mockMvc.perform(MockMvcRequestBuilders.get("/user/all"));
        result.andExpect(MockMvcResultMatchers.status().isOk());
        result.andDo(MockMvcResultHandlers.print());//打印出请求和相应的内容
        result.andReturn().getResponse().getContentAsString();
        result.andExpect(MockMvcResultMatchers.content().contentType("application/json;charset=UTF-8"));
        result.andExpect(MockMvcResultMatchers.jsonPath(".username").isNotEmpty());
    }

    @Test
    // @WithMockUser(username = "fdsafd", roles = {"1", "2"})
    //@WithUserDetails("cwx183898")
    public void save() throws Exception {
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>(0);
        params.add("users[0].username", "username");
        params.add("users[0].name", "name");
        params.add("users[0].password", "password");
        params.add("users[0].locked", "false");
        params.add("users[0].creator", "creator");
        params.add("users[0].accountExpiringDate", "2019-09-09");
        params.add("users[0].credentialsExpiringDate", "2019-09-09");
        params.add("users[0].roles[1].id", "1");
        MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.post("/user/save");
        builder.params(params);
        builder.contentType(MediaType.APPLICATION_FORM_URLENCODED);


        ResultActions result = mockMvc.perform(builder);
        result.andExpect(MockMvcResultMatchers.status().isOk());
        result.andDo(MockMvcResultHandlers.print());//打印出请求和相应的内容
        result.andReturn().getResponse().getContentAsString();
        result.andExpect(MockMvcResultMatchers.content().contentType("application/json;charset=UTF-8"));
        result.andExpect(MockMvcResultMatchers.jsonPath("$.username").value("username"));
    }


    @Test
    public void query() throws Exception {
        MultiValueMap<String, String> params = new LinkedMultiValueMap<String, String>(0);
        params.add("params.id", "1");
        params.add("pageable.size", "1");
        params.add("pageable.page", "0");
        MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.post("/user/query");
        builder.params(params);
        builder.contentType(MediaType.APPLICATION_FORM_URLENCODED);


        ResultActions result = mockMvc.perform(builder);
        result.andExpect(MockMvcResultMatchers.status().isOk());
        result.andDo(MockMvcResultHandlers.print());//打印出请求和相应的内容
        result.andReturn().getResponse().getContentAsString();
        result.andExpect(MockMvcResultMatchers.content().contentType("application/json;charset=UTF-8"));
        result.andExpect(MockMvcResultMatchers.jsonPath(".username").value("testusername"));
    }

}
