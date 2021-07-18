package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.Application;
import com.jasmine.crud_project.pojo.req.AddPProjectConfigReq;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * InitServiceImpl Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since <pre>06/27/2021</pre>
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class InitServiceImplTest {

    @Autowired
    private SystemServiceImpl service;

    @Before
    public void before() throws Exception {
    }

    @After
    public void after() throws Exception {
    }

    /**
     * Method: init(AddPProjectConfigReq req)
     */
    @Test
    public void testInit() throws Exception {
        AddPProjectConfigReq req = new AddPProjectConfigReq();
        req.setContent("{}");
        req.setProjectId(1);
        service.init(req);
    }


} 
