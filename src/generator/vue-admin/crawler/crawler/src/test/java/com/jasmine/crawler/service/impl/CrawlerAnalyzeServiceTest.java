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
import com.jasmine.crawler.controller.CrawlerAnalyzeController;
import com.jasmine.crawler.pojo.req.AddCrawlerAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetCrawlerAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateCrawlerAnalyzeReq;
import com.jasmine.crawler.pojo.resp.R;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * CrawlerAnalyzeService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Fri Jul 31 2020 21:09:23 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class CrawlerAnalyzeServiceTest {

    @Autowired
    private CrawlerAnalyzeController controller;

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

                AddCrawlerAnalyzeReq req =new AddCrawlerAnalyzeReq();

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

                UpdateCrawlerAnalyzeReq req =new UpdateCrawlerAnalyzeReq();

                R result =controller.updateById(

                                                15,

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

                GetCrawlerAnalyzePageReq req =new GetCrawlerAnalyzePageReq();

          R result =controller.getPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 
