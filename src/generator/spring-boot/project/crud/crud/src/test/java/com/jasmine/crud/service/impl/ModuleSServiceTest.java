/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.Application;
import com.jasmine.crud.TestUtils;
import com.jasmine.crud.controller.ModuleSController;
import com.jasmine.crud.pojo.req.AddModuleSReq;
import com.jasmine.crud.pojo.req.GetModuleSPageReq;
import com.jasmine.crud.pojo.req.UpdateModuleSReq;
import com.jasmine.crud.pojo.resp.R;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * ModuleSService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Mon Apr 26 2021 15:27:14 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class ModuleSServiceTest {

    @Autowired
    private ModuleSController controller;

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

                AddModuleSReq req =new AddModuleSReq();

                                         req.setDescription("avoid annoy thing to do");
                                         req.setLevel(20);
                                         req.setName("jasmine");
                                         req.setParentMouduleId(6);
                                         req.setProjectId(2);

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

                                                6 

                        );

                 TestUtils.print(result);

    }    /**
     * update 
     *
     */
    @Test
    public void testUpdate(){

                UpdateModuleSReq req =new UpdateModuleSReq();

                                         req.setId(15);
                                         req.setDescription("jasmine code generator, generate every thing you need");
                                         req.setLevel(0);
                                         req.setName("calla");
                                         req.setParentMouduleId(29);
                                         req.setProjectId(1);

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

                GetModuleSPageReq req =new GetModuleSPageReq();

                                         req.setLevel(20);
                                         req.setName("jasmine");

          R result =controller.getDetailPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

