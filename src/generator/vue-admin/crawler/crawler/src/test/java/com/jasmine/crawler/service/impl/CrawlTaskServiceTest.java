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
import com.jasmine.crawler.controller.CrawlTaskController;
import com.jasmine.crawler.pojo.req.GetCrawlTaskPageReq;
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
 * CrawlTaskService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Fri Jul 31 2020 21:09:23 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class CrawlTaskServiceTest {

    @Autowired
    private CrawlTaskController controller;

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

                GetCrawlTaskPageReq req =new GetCrawlTaskPageReq();

                                         req.setSiteId(6);
                                         req.setDownSystemSiteId(8);
                                         req.setTaskStatus(30);
                                         req.setTaskExecuteResultType(0);
                                         req.setCrawlerId(6);
                                         req.setBindLastStatus(20);
                                         req.setDispatchStatus(0);
                                         req.setCookieId(6);
                                         req.setProxyId(6);
                                         req.setEnableStatus(0);
                                         req.setCreateTimeStart(new Date());
                                         req.setCreateTimeEnd(new Date());

          R result =controller.getPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

