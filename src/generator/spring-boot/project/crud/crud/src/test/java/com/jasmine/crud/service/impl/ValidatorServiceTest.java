/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.Application;
import com.jasmine.crud.TestUtils;
import com.jasmine.crud.controller.ValidatorController;
import com.jasmine.crud.pojo.req.AddValidatorReq;
import com.jasmine.crud.pojo.req.GetValidatorPageReq;
import com.jasmine.crud.pojo.req.UpdateValidatorReq;
import com.jasmine.crud.pojo.resp.R;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * ValidatorService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Mon Apr 26 2021 15:27:14 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class ValidatorServiceTest {

    @Autowired
    private ValidatorController controller;

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

                AddValidatorReq req =new AddValidatorReq();

                                         req.setFieldId(8);
                                         req.setMsg("jasmine code generator, generate every thing you need");
                                         req.setPattern("mock string");

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

                                                7 

                        );

                 TestUtils.print(result);

    }    /**
     * update 
     *
     */
    @Test
    public void testUpdate(){

                UpdateValidatorReq req =new UpdateValidatorReq();

                                         req.setId(29);
                                         req.setFieldId(7);
                                         req.setMsg("mock generator, generate lots of data for testing");
                                         req.setPattern("mock string");

                R result =controller.update(

                                                req 

                        );

                 TestUtils.printQuery(req,result);

    }    /**
     * getDetailPage 
     *
     */
    @Test
    public void testGetDetailPage(){

                GetValidatorPageReq req =new GetValidatorPageReq();

          R result =controller.getDetailPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

