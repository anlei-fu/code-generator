/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.Application;
import com.jasmine.crud.TestUtils;
import com.jasmine.crud.controller.FieldInfoController;
import com.jasmine.crud.pojo.req.AddFieldInfoReq;
import com.jasmine.crud.pojo.req.GetFieldInfoPageReq;
import com.jasmine.crud.pojo.req.UpdateFieldInfoReq;
import com.jasmine.crud.pojo.resp.R;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * FieldInfoService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Mon Apr 26 2021 15:27:14 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class FieldInfoServiceTest {

    @Autowired
    private FieldInfoController controller;

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

                AddFieldInfoReq req =new AddFieldInfoReq();

                                         req.setBatchEditable(20);
                                         req.setDefaultShow(0);
                                         req.setDescription("mock generator, generate lots of data for testing");
                                         req.setEditable(90);
                                         req.setFilterType(0);
                                         req.setFormatPattern("mock string");
                                         req.setFormatType(30);
                                         req.setInsertNullable(90);
                                         req.setInsertable(90);
                                         req.setIsName(0);
                                         req.setIsPk(1);
                                         req.setJavaType("mock string");
                                         req.setName("balsam");
                                         req.setNoticeText("there're three paris in the world,the most  famous one in france ,one in canada ,and last one in texas,us");
                                         req.setOrder(30);
                                         req.setRawName("calla");
                                         req.setRealColumn(20);
                                         req.setTableId(7);
                                         req.setTitle("a silent lamb");

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

                                                15 

                        );

                 TestUtils.print(result);

    }    /**
     * update 
     *
     */
    @Test
    public void testUpdate(){

                UpdateFieldInfoReq req =new UpdateFieldInfoReq();

                                         req.setId(7);
                                         req.setBatchEditable(0);
                                         req.setDefaultShow(30);
                                         req.setDescription("jasmine code generator, generate every thing you need");
                                         req.setEditable(20);
                                         req.setFilterType(90);
                                         req.setFormatPattern("mock string");
                                         req.setFormatType(90);
                                         req.setInsertNullable(0);
                                         req.setInsertable(0);
                                         req.setIsName(1);
                                         req.setIsPk(0);
                                         req.setJavaType("mock string");
                                         req.setName("jasmine");
                                         req.setNoticeText("there are three waterloon bridges in the wrold too...");
                                         req.setOrder(0);
                                         req.setRawName("calla");
                                         req.setRealColumn(90);
                                         req.setTableId(8);
                                         req.setTitle(" twelve angry men");

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

                GetFieldInfoPageReq req =new GetFieldInfoPageReq();

                                         req.setIsName(0);
                                         req.setIsPk(0);
                                         req.setName("calla");

          R result =controller.getDetailPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

