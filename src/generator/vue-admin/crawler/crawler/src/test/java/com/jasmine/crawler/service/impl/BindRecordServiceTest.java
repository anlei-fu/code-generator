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
import com.jasmine.crawler.controller.BindRecordController;
import com.jasmine.crawler.pojo.req.GetBindRecordPageReq;
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
 * BindRecordService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Fri Jul 31 2020 21:09:23 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class BindRecordServiceTest {

    @Autowired
    private BindRecordController controller;

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

                GetBindRecordPageReq req =new GetBindRecordPageReq();

                                         req.setCrawlTaskId(29);
                                         req.setCreateTimeStart(new Date());
                                         req.setCreateTimeEnd(new Date());
                                         req.setBindStatus(30);

          R result =controller.getPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

