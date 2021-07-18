/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.Application;
import com.jasmine.crud.TestUtils;
import com.jasmine.crud.controller.CheckboxController;
import com.jasmine.crud.pojo.req.AddCheckboxReq;
import com.jasmine.crud.pojo.req.GetCheckboxPageReq;
import com.jasmine.crud.pojo.req.UpdateCheckboxReq;
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
 * CheckboxService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Wed Jun 09 2021 18:11:52 GMT+0800 (China Standard Time)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class CheckboxServiceTest {

    @Autowired
    private CheckboxController controller;

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

        AddCheckboxReq req = new AddCheckboxReq();

        req.setProjectId(7);
        req.setContent("there are three waterloon bridges in the wrold too...");


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


                2


        );


        TestUtils.print(result);

    }

    /**
     * update
     */
    @Test
    public void testUpdate() {

        UpdateCheckboxReq req = new UpdateCheckboxReq();

        req.setId(1);
        req.setProjectId(1);
        req.setContent("there are three waterloon bridges in the wrold too...");


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

        GetCheckboxPageReq req = new GetCheckboxPageReq();

        req.setUpdateTimeStart(new Date());
        req.setUpdateTimeEnd(new Date());


        R result = controller.getDetailPage(


                req


        );


        TestUtils.printQuery(req, result);

    }
} 

