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
import com.jasmine.crawler.controller.SiteAnalyzeController;
import com.jasmine.crawler.pojo.req.AddSiteAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetSiteAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateSiteAnalyzeReq;
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
 * SiteAnalyzeService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Fri Jul 31 2020 21:09:23 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class SiteAnalyzeServiceTest {

    @Autowired
    private SiteAnalyzeController controller;

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

                AddSiteAnalyzeReq req =new AddSiteAnalyzeReq();

                                         req.setSiteId(6);
                                         req.setTotalCount(56589);
                                         req.setSuccessCount(56589);
                                         req.setSuccessAverageSpeed(90);
                                         req.setAverageSpeed(0);
                                         req.setBlockIpCount(56589);
                                         req.setBlockAccountCount(0);
                                         req.setSuccessMean(0);

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

                                                15 

                        );

                 TestUtils.print(result);

    }    /**
     * updateById 
     *
     */
    @Test
    public void testUpdateById(){

                UpdateSiteAnalyzeReq req =new UpdateSiteAnalyzeReq();

                                         req.setSiteId(6);
                                         req.setTotalCount(56589);
                                         req.setSuccessCount(12);
                                         req.setSuccessAverageSpeed(0);
                                         req.setAverageSpeed(20);
                                         req.setBlockIpCount(0);
                                         req.setBlockAccountCount(899);
                                         req.setSuccessMean(30);

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

                                        2 

                        );

                 TestUtils.print(result);

    }    /**
     * getPage 
     *
     */
    @Test
    public void testGetPage(){

                GetSiteAnalyzePageReq req =new GetSiteAnalyzePageReq();

                                         req.setSiteId(6);
                                         req.setCreateTimeStart(new Date());
                                         req.setCreateTimeEnd(new Date());

          R result =controller.getPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

