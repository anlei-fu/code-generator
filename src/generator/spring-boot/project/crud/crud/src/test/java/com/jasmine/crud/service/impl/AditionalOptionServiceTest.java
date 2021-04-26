/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.Application;
import com.jasmine.crud.TestUtils;
import com.jasmine.crud.controller.AditionalOptionController;
import com.jasmine.crud.pojo.req.AddAditionalOptionReq;
import com.jasmine.crud.pojo.req.GetAditionalOptionPageReq;
import com.jasmine.crud.pojo.req.UpdateAditionalOptionReq;
import com.jasmine.crud.pojo.resp.R;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * AditionalOptionService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Mon Apr 26 2021 15:27:14 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class AditionalOptionServiceTest {

    @Autowired
    private AditionalOptionController controller;

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

                AddAditionalOptionReq req =new AddAditionalOptionReq();

                                         req.setCheck("mock string");
                                         req.setDescription("avoid annoy thing to do");
                                         req.setEnable("mock string");
                                         req.setName("lily");
                                         req.setNoticeText("there're three paris in the world,the most  famous one in france ,one in canada ,and last one in texas,us");
                                         req.setTableId("mock string");
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

                UpdateAditionalOptionReq req =new UpdateAditionalOptionReq();

                                         req.setId(2);
                                         req.setCheck("mock string");
                                         req.setDescription("jasmine code generator, generate every thing you need");
                                         req.setEnable("mock string");
                                         req.setName("jasmine");
                                         req.setNoticeText("this is content mock...");
                                         req.setTableId("mock string");
                                         req.setTitle("ranger bull");

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

                GetAditionalOptionPageReq req =new GetAditionalOptionPageReq();

                                         req.setName("calla");

          R result =controller.getDetailPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

