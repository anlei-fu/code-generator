/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.Application;
import com.jasmine.crud.TestUtils;
import com.jasmine.crud.controller.TableEnumController;
import com.jasmine.crud.pojo.req.AddTableEnumReq;
import com.jasmine.crud.pojo.req.GetTableEnumPageReq;
import com.jasmine.crud.pojo.req.UpdateTableEnumReq;
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
 * TableEnumService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Wed Jun 09 2021 18:11:52 GMT+0800 (China Standard Time)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class TableEnumServiceTest {

    @Autowired
    private TableEnumController controller;

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

        AddTableEnumReq req = new AddTableEnumReq();

        req.setProjectId(8);
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


                6


        );


        TestUtils.print(result);

    }

    /**
     * update
     */
    @Test
    public void testUpdate() {

        UpdateTableEnumReq req = new UpdateTableEnumReq();

        req.setId(6);
        req.setProjectId(15);
        req.setContent("there're three paris in the world,the most  famous one in france ,one in canada ,and last one in texas,us");


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


                7


        );


        TestUtils.print(result);

    }

    /**
     * getDetailPage
     */
    @Test
    public void testGetDetailPage() {

        GetTableEnumPageReq req = new GetTableEnumPageReq();

        req.setUpdateTimeStart(new Date());
        req.setUpdateTimeEnd(new Date());


        R result = controller.getDetailPage(


                req


        );


        TestUtils.printQuery(req, result);

    }
} 

