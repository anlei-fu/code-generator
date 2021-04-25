/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-25 6:53:03 PM 
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
 * @since Sun Apr 25 2021 18:53:03 GMT+0800 (GMT+08:00)
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
                                         req.setBatchEidit(30);
                                         req.setDeletable(20);
                                         req.setDescription("this is description mock data segment");
                                         req.setEiditable(0);
                                         req.setInsertable(30);
                                         req.setMouduleId(29);
                                         req.setName("jasmine");
                                         req.setProjectId(7);
                                         req.setRawName("rose");
                                         req.setTitle(" casino");

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

                                                29 

                        );

                 TestUtils.print(result);

    }    /**
     * update 
     *
     */
    @Test
    public void testUpdate(){

                UpdateTableInfoReq req =new UpdateTableInfoReq();

                                         req.setId(35);
                                         req.setApiPrefix("mock string");
                                         req.setBatchDelete(20);
                                         req.setBatchEidit(20);
                                         req.setDeletable(90);
                                         req.setDescription("jasmine code generator, generate every thing you need");
                                         req.setEiditable(20);
                                         req.setInsertable(20);
                                         req.setMouduleId(7);
                                         req.setName("narcissus");
                                         req.setProjectId(1);
                                         req.setRawName("jasmine");
                                         req.setTitle("a silent lamb");

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

                GetTableInfoPageReq req =new GetTableInfoPageReq();

                                         req.setName("rose");

          R result =controller.getDetailPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

