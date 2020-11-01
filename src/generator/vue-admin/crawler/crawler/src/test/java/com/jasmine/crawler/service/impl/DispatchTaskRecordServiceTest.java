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
import com.jasmine.crawler.controller.DispatchTaskRecordController;
import com.jasmine.crawler.pojo.req.GetDispatchTaskRecordPageReq;
import com.jasmine.crawler.pojo.resp.R;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * DispatchTaskRecordService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Fri Jul 31 2020 21:09:23 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class DispatchTaskRecordServiceTest {

    @Autowired
    private DispatchTaskRecordController controller;

    @Before
    public void before() {
    }

    @After
    public void after() {
    }

    /**
     * getPage 
     *
     */
    @Test
    public void testGetPage(){

                GetDispatchTaskRecordPageReq req =new GetDispatchTaskRecordPageReq();

                                         req.setCrawlTaskId(8);
                                         req.setDispatchStatus(20);

          R result =controller.getPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

