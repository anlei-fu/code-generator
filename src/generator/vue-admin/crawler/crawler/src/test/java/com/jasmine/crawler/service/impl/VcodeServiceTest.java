/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service.impl;

import com.github.pagehelper.Page;
import com.jasmine.crawler.Application;
import com.jasmine.crawler.TestUtils;
import com.jasmine.crawler.controller.VcodeController;
import com.jasmine.crawler.pojo.req.AddVcodeReq;
import com.jasmine.crawler.pojo.req.GetVcodePageReq;
import com.jasmine.crawler.pojo.req.UpdateVcodeReq;
import com.jasmine.crawler.pojo.resp.R;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

/**
 * VcodeService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Fri Jul 31 2020 21:09:23 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class VcodeServiceTest {

    @Autowired
    private VcodeController controller;

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

                AddVcodeReq req =new AddVcodeReq();

                                         req.setAccountId(56589);
                                         req.setVcodeType(20);
                                         req.setContent("there're three paris in the world,the most  famous one in france ,one in canada ,and last one in texas,us");

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
     * updateById 
     *
     */
    @Test
    public void testUpdateById(){

                UpdateVcodeReq req =new UpdateVcodeReq();

                                         req.setAccountId(56589);
                                         req.setVcodeType(0);
                                         req.setContent("this is content mock...");

                R result =controller.updateById(

                                                6,

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

                                        15 

                        );

                 TestUtils.print(result);

    }    /**
     * getPage 
     *
     */
    @Test
    public void testGetPage(){

                GetVcodePageReq req =new GetVcodePageReq();

                                         req.setAccountId(56589);
                                         req.setVcodeType(30);
                                         req.setCreateTimeStart(new Date());
                                         req.setCreateTimeEnd(new Date());

          R result =controller.getPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

