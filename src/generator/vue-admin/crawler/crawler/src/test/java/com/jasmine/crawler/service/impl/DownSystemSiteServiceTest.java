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
import com.jasmine.crawler.controller.DownSystemSiteController;
import com.jasmine.crawler.pojo.req.AddDownSystemSiteReq;
import com.jasmine.crawler.pojo.req.GetDownSystemSitePageReq;
import com.jasmine.crawler.pojo.req.UpdateDownSystemSiteReq;
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
 * DownSystemSiteService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Fri Jul 31 2020 21:09:23 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class DownSystemSiteServiceTest {

    @Autowired
    private DownSystemSiteController controller;

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

                AddDownSystemSiteReq req =new AddDownSystemSiteReq();

                                         req.setSiteId(15);
                                         req.setScriptId(1);
                                         req.setDownSystemId(6);
                                         req.setPriority(20);
                                         req.setCrawlerPageEncoding("mock string");
                                         req.setCrawlerPageTimeout(0);
                                         req.setCrawlerCrawlType(20);
                                         req.setCrawlerAutoDownloadPage(0);
                                         req.setUrlMaxCacheCount(12);
                                         req.setUrlEncodes("http://www.bbc.co.uk");
                                         req.setUrlMaxCrawlCount(56589);
                                         req.setUrlMatchPatterns("http://www.qq.com");
                                         req.setBloomExpectedUrlSize(0);
                                         req.setBloomFpp(30f);
                                         req.setTaskUrlBatchCount(12);
                                         req.setTaskMaxWaitToBindCount(899);
                                         req.setTaskMaxRunningCount(12);
                                         req.setTaskTimeout(0);
                                         req.setEnableStatus(1);

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

                UpdateDownSystemSiteReq req =new UpdateDownSystemSiteReq();

                                         req.setSiteId(15);
                                         req.setScriptId(15);
                                         req.setDownSystemId(7);
                                         req.setPriority(30);
                                         req.setCrawlerPageEncoding("mock string");
                                         req.setCrawlerPageTimeout(20);
                                         req.setCrawlerCrawlType(20);
                                         req.setCrawlerAutoDownloadPage(30);
                                         req.setUrlMaxCacheCount(12);
                                         req.setUrlEncodes("http://www.bbc.co.uk");
                                         req.setUrlMaxCrawlCount(6142);
                                         req.setUrlMatchPatterns("http://www.bbc.co.uk");
                                         req.setBloomExpectedUrlSize(90);
                                         req.setBloomFpp(90f);
                                         req.setTaskUrlBatchCount(56589);
                                         req.setTaskMaxWaitToBindCount(6142);
                                         req.setTaskMaxRunningCount(6142);
                                         req.setTaskTimeout(0);
                                         req.setEnableStatus(0);

                R result =controller.updateById(

                                                7,

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

                GetDownSystemSitePageReq req =new GetDownSystemSitePageReq();

                                         req.setSiteId(29);
                                         req.setScriptId(35);
                                         req.setDownSystemId(29);
                                         req.setCrawlerCrawlType(0);
                                         req.setBloomFpp(30f);
                                         req.setEnableStatus(1);
                                         req.setCreateTimeStart(new Date());
                                         req.setCreateTimeEnd(new Date());

          R result =controller.getPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

