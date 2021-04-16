/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.Application;
import com.jasmine.crud.TestUtils;
import com.jasmine.crud.controller.ProjectController;
import com.jasmine.crud.pojo.req.AddProjectReq;
import com.jasmine.crud.pojo.req.GetProjectPageReq;
import com.jasmine.crud.pojo.req.UpdateProjectReq;
import com.jasmine.crud.pojo.resp.R;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

/**
 * ProjectService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Fri Apr 16 2021 16:50:21 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class ProjectServiceTest {

    @Autowired
    private ProjectController controller;

    @Before
    public void before() {
    }

    @After
    public void after() {
    }

    /**
     * add 
     *
     */
    @Test
    public void testAdd(){

                AddProjectReq req =new AddProjectReq();

                                         req.setCompany("github");
                                         req.setDescription("this is description mock data segment");
                                         req.setName("balsam");

                R result =controller.add(

                                                req 

                        );

                 TestUtils.printQuery(req,result);

    }    /**
     * deleteById 
     *
     */
    @Test
    public void testDeleteById(){

                R result =controller.deleteById(

                                                2 

                        );

                 TestUtils.print(result);

    }    /**
     * update 
     *
     */
    @Test
    public void testUpdate(){

                UpdateProjectReq req =new UpdateProjectReq();

                                         req.setCompany("github");
                                         req.setDescription("avoid annoy thing to do");
                                         req.setName("jasmine");

                R result =controller.update(

                                                req 

                        );

                 TestUtils.printQuery(req,result);

    }    /**
     * getById 
     *
     */
    @Test
    public void testGetById(){

          R result =controller.getById(

                                        8 

                        );

                 TestUtils.print(result);

    }    /**
     * getPage 
     *
     */
    @Test
    public void testGetPage(){

                GetProjectPageReq req =new GetProjectPageReq();

                                         req.setCompany("tencent");
                                         req.setCreateTimeStart(new Date());
                                         req.setCreateTimeEnd(new Date());
                                         req.setDescription("mock generator, generate lots of data for testing");
                                         req.setName("balsam");

          R result =controller.getPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

