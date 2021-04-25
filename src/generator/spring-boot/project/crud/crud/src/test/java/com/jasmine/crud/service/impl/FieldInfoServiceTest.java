/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-25 6:53:03 PM 
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
 * @since Sun Apr 25 2021 18:53:03 GMT+0800 (GMT+08:00)
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
                                         req.setDefaultShow(20);
                                         req.setDescription("this is description mock data segment");
                                         req.setEditable(0);
                                         req.setFilterType(0);
                                         req.setFormatPattern("mock string");
                                         req.setFormatType(20);
                                         req.setInsertNullable(20);
                                         req.setInsertable(90);
                                         req.setIsName(0);
                                         req.setIsPk(1);
                                         req.setJavaType("mock string");
                                         req.setName("lily");
                                         req.setNoticeText("every adult once ever been a child ,but few she or he can remember what it looks like at that time ");
                                         req.setOrder(30);
                                         req.setRawName("lily");
                                         req.setRealColumn(90);
                                         req.setTableId(1);
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

                                                1 

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
                                         req.setBatchEditable(20);
                                         req.setDefaultShow(0);
                                         req.setDescription("this is description mock data segment");
                                         req.setEditable(90);
                                         req.setFilterType(0);
                                         req.setFormatPattern("mock string");
                                         req.setFormatType(90);
                                         req.setInsertNullable(0);
                                         req.setInsertable(0);
                                         req.setIsName(1);
                                         req.setIsPk(1);
                                         req.setJavaType("mock string");
                                         req.setName("lily");
                                         req.setNoticeText("you think when you leave chinatown you can get justice ,but every where is chinatown.... from a black movie");
                                         req.setOrder(30);
                                         req.setRawName("balsam");
                                         req.setRealColumn(0);
                                         req.setTableId(7);
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

                GetFieldInfoPageReq req =new GetFieldInfoPageReq();

                                         req.setIsName(1);
                                         req.setIsPk(1);
                                         req.setName("balsam");

          R result =controller.getDetailPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

