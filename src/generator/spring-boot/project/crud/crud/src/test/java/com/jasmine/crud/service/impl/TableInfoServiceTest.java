/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.Application;
import com.jasmine.crud.TestUtils;
import com.jasmine.crud.controller.TableInfoController;
import com.jasmine.crud.pojo.req.AddTableInfoReq;
import com.jasmine.crud.pojo.req.GetTableInfoPageReq;
import com.jasmine.crud.pojo.req.UpdateTableInfoReq;
import com.jasmine.crud.pojo.resp.R;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * TableInfoService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Fri Apr 16 2021 16:50:21 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class TableInfoServiceTest {

    @Autowired
    private TableInfoController controller;

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

                AddTableInfoReq req =new AddTableInfoReq();

                                         req.setApiPrefix("mock string");
                                         req.setBatchDelete(20);
                                         req.setBatchEidit(90);
                                         req.setDeletable(90);
                                         req.setDescription("avoid annoy thing to do");
                                         req.setEiditable(0);
                                         req.setInsertable(20);
                                         req.setMouduleId(1);
                                         req.setName("narcissus");
                                         req.setProjectId(7);
                                         req.setRawName("carnation");
                                         req.setTitle("ranger bull");

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

                UpdateTableInfoReq req =new UpdateTableInfoReq();

                                         req.setApiPrefix("mock string");
                                         req.setBatchDelete(20);
                                         req.setBatchEidit(0);
                                         req.setDeletable(30);
                                         req.setDescription("avoid annoy thing to do");
                                         req.setEiditable(30);
                                         req.setInsertable(90);
                                         req.setMouduleId(15);
                                         req.setName("balsam");
                                         req.setProjectId(1);
                                         req.setRawName("calla");
                                         req.setTitle(" casino");

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

                                        7 

                        );

                 TestUtils.print(result);

    }    /**
     * getPage 
     *
     */
    @Test
    public void testGetPage(){

                GetTableInfoPageReq req =new GetTableInfoPageReq();

                                         req.setApiPrefix("mock string");
                                         req.setBatchDelete(30);
                                         req.setBatchEidit(0);
                                         req.setDeletable(0);
                                         req.setDescription("mock generator, generate lots of data for testing");
                                         req.setEiditable(30);
                                         req.setInsertable(30);
                                         req.setMouduleId(6);
                                         req.setName("narcissus");
                                         req.setProjectId(1);
                                         req.setRawName("calla");
                                         req.setTitle("ranger bull");

          R result =controller.getPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

