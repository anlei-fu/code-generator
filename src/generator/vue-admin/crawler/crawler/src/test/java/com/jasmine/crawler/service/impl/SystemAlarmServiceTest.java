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
import com.jasmine.crawler.controller.SystemAlarmController;
import com.jasmine.crawler.pojo.req.AddSystemAlarmReq;
import com.jasmine.crawler.pojo.req.GetSystemAlarmPageReq;
import com.jasmine.crawler.pojo.req.UpdateSystemAlarmReq;
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
 * SystemAlarmService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Fri Jul 31 2020 21:09:23 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class SystemAlarmServiceTest {

    @Autowired
    private SystemAlarmController controller;

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

                AddSystemAlarmReq req =new AddSystemAlarmReq();

                                         req.setSiteId("mock string");
                                         req.setMsg("mock generator, generate lots of data for testing");
                                         req.setIsReaded(0);

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

                                                2 

                        );

                 TestUtils.print(result);

    }    /**
     * updateById 
     *
     */
    @Test
    public void testUpdateById(){

                UpdateSystemAlarmReq req =new UpdateSystemAlarmReq();

                                         req.setSiteId("mock string");
                                         req.setMsg("mock generator, generate lots of data for testing");
                                         req.setIsReaded(1);

                R result =controller.updateById(

                                                35,

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

                                        8 

                        );

                 TestUtils.print(result);

    }    /**
     * getPage 
     *
     */
    @Test
    public void testGetPage(){

                GetSystemAlarmPageReq req =new GetSystemAlarmPageReq();

                                         req.setSiteId("mock string");
                                         req.setIsReaded(1);
                                         req.setCreateTimeStart(new Date());
                                         req.setCreateTimeEnd(new Date());

          R result =controller.getPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

