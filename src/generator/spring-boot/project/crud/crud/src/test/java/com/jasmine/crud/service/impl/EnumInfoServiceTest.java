/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.Application;
import com.jasmine.crud.TestUtils;
import com.jasmine.crud.controller.EnumInfoController;
import com.jasmine.crud.pojo.req.AddEnumInfoReq;
import com.jasmine.crud.pojo.req.GetEnumInfoPageReq;
import com.jasmine.crud.pojo.req.UpdateEnumInfoReq;
import com.jasmine.crud.pojo.resp.R;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


/**
 * EnumInfoService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Wed Jun 09 2021 18:11:52 GMT+0800 (China Standard Time)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class EnumInfoServiceTest {

    @Autowired
    private EnumInfoController controller;

    @Before
    public void before() {
    }

    @After
    public void after() {
    }

    /**
     * add
     */
    @Test
    public void testAdd() {

        AddEnumInfoReq req = new AddEnumInfoReq();

        req.setProjectId(1);
        req.setContent("there're three paris in the world,the most  famous one in france ,one in canada ,and last one in texas,us");


        R result = controller.add(


                req


        );


        TestUtils.printQuery(req, result);

    }

    /**
     * deleteById
     */
    @Test
    public void testDeleteById() {


        R result = controller.deleteById(


                "mock string"


        );


        TestUtils.print(result);

    }

    /**
     * update
     */
    @Test
    public void testUpdate() {

        UpdateEnumInfoReq req = new UpdateEnumInfoReq();

        req.setId("mock string");
        req.setProjectId(1);
        req.setContent("every adult once ever been a child ,but few she or he can remember what it looks like at that time ");


        R result = controller.update(


                req


        );


        TestUtils.printQuery(req, result);

    }

    /**
     * getById
     */
    @Test
    public void testGetById() {


        R result = controller.getById(


                "mock string"


        );


        TestUtils.print(result);

    }

    /**
     * getDetailPage
     */
    @Test
    public void testGetDetailPage() {

        GetEnumInfoPageReq req = new GetEnumInfoPageReq();


        R result = controller.getDetailPage(


                req


        );


        TestUtils.printQuery(req, result);

    }
} 

