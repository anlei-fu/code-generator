/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-16 4:50:21 PM 
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
 * @since Fri Apr 16 2021 16:50:21 GMT+0800 (GMT+08:00)
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

                                         req.setBatchEditable(30);
                                         req.setDefaultShow(0);
                                         req.setDescription("avoid annoy thing to do");
                                         req.setEditable(0);
                                         req.setFilterType(0);
                                         req.setFormatPattern("mock string");
                                         req.setFormatType(0);
                                         req.setInsertNullable(20);
                                         req.setInsertable(30);
                                         req.setIsName(1);
                                         req.setIsPk(0);
                                         req.setJavaType("mock string");
                                         req.setName("jasmine");
                                         req.setNoticeText("every adult once ever been a child ,but few she or he can remember what it looks like at that time ");
                                         req.setOrder(20);
                                         req.setRawName("lily");
                                         req.setRealColumn(0);
                                         req.setTableId(35);
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

                                                7 

                        );

                 TestUtils.print(result);

    }    /**
     * update 
     *
     */
    @Test
    public void testUpdate(){

                UpdateFieldInfoReq req =new UpdateFieldInfoReq();

                                         req.setBatchEditable(20);
                                         req.setDefaultShow(0);
                                         req.setDescription("avoid annoy thing to do");
                                         req.setEditable(0);
                                         req.setFilterType(30);
                                         req.setFormatPattern("mock string");
                                         req.setFormatType(90);
                                         req.setInsertNullable(0);
                                         req.setInsertable(0);
                                         req.setIsName(1);
                                         req.setIsPk(1);
                                         req.setJavaType("mock string");
                                         req.setName("narcissus");
                                         req.setNoticeText("you think when you leave chinatown you can get justice ,but every where is chinatown.... from a black movie");
                                         req.setOrder(90);
                                         req.setRawName("rose");
                                         req.setRealColumn(0);
                                         req.setTableId(8);
                                         req.setTitle(" twelve angry men");

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

                                        35 

                        );

                 TestUtils.print(result);

    }    /**
     * getPage 
     *
     */
    @Test
    public void testGetPage(){

                GetFieldInfoPageReq req =new GetFieldInfoPageReq();

                                         req.setBatchEditable(30);
                                         req.setDefaultShow(30);
                                         req.setDescription("avoid annoy thing to do");
                                         req.setEditable(30);
                                         req.setFilterType(20);
                                         req.setFormatPattern("mock string");
                                         req.setFormatType(20);
                                         req.setInsertNullable(20);
                                         req.setInsertable(90);
                                         req.setJavaType("mock string");
                                         req.setName("rose");
                                         req.setNoticeText("every adult once ever been a child ,but few she or he can remember what it looks like at that time ");
                                         req.setOrder(20);
                                         req.setRawName("narcissus");
                                         req.setRealColumn(20);
                                         req.setTableId(35);
                                         req.setTitle("a silent lamb");

          R result =controller.getPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

