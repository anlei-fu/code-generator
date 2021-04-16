/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.Application;
import com.jasmine.crud.TestUtils;
import com.jasmine.crud.controller.ThemeConfigController;
import com.jasmine.crud.pojo.req.AddThemeConfigReq;
import com.jasmine.crud.pojo.req.GetThemeConfigPageReq;
import com.jasmine.crud.pojo.req.UpdateThemeConfigReq;
import com.jasmine.crud.pojo.resp.R;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * ThemeConfigService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Fri Apr 16 2021 16:50:21 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class ThemeConfigServiceTest {

    @Autowired
    private ThemeConfigController controller;

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

                AddThemeConfigReq req =new AddThemeConfigReq();

                                         req.setBaseColor1("mock string");
                                         req.setBaseColor2("mock string");
                                         req.setLogin("mock string");
                                         req.setProjectId(35);

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

                UpdateThemeConfigReq req =new UpdateThemeConfigReq();

                                         req.setBaseColor1("mock string");
                                         req.setBaseColor2("mock string");
                                         req.setLogin("mock string");
                                         req.setProjectId(1);

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

                                        29 

                        );

                 TestUtils.print(result);

    }    /**
     * getPage 
     *
     */
    @Test
    public void testGetPage(){

                GetThemeConfigPageReq req =new GetThemeConfigPageReq();

                                         req.setBaseColor1("mock string");
                                         req.setBaseColor2("mock string");
                                         req.setLogin("mock string");
                                         req.setProjectId(7);

          R result =controller.getPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

