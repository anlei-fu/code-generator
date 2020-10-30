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
import com.jasmine.crawler.controller.DynamicUrlJobController;
import com.jasmine.crawler.pojo.req.AddDynamicUrlJobReq;
import com.jasmine.crawler.pojo.req.GetDynamicUrlJobPageReq;
import com.jasmine.crawler.pojo.req.UpdateDynamicUrlJobReq;
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
 * DynamicUrlJobService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Fri Jul 31 2020 21:09:23 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class DynamicUrlJobServiceTest {

    @Autowired
    private DynamicUrlJobController controller;

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

                AddDynamicUrlJobReq req =new AddDynamicUrlJobReq();

                                         req.setDownSystemId(7);
                                         req.setScriptId(1);
                                         req.setDynamicType(0);
                                         req.setEnableStatus(1);
                                         req.setDelayTimeout(0);
                                         req.setConcurrency(20);
                                         req.setMaxWaintToBindTaskCount(12);

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

                                                8 

                        );

                 TestUtils.print(result);

    }    /**
     * updateById 
     *
     */
    @Test
    public void testUpdateById(){

                UpdateDynamicUrlJobReq req =new UpdateDynamicUrlJobReq();

                                         req.setDownSystemId(29);
                                         req.setScriptId(35);
                                         req.setDynamicType(30);
                                         req.setEnableStatus(0);
                                         req.setDelayTimeout(90);
                                         req.setLastRunTime(new Date());
                                         req.setConcurrency(30);
                                         req.setMaxWaintToBindTaskCount(899);

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

                                        6 

                        );

                 TestUtils.print(result);

    }    /**
     * getPage 
     *
     */
    @Test
    public void testGetPage(){

                GetDynamicUrlJobPageReq req =new GetDynamicUrlJobPageReq();

                                         req.setDownSystemId(35);
                                         req.setScriptId(15);
                                         req.setDynamicType(90);
                                         req.setCreateTimeStart(new Date());
                                         req.setCreateTimeEnd(new Date());
                                         req.setEnableStatus(0);

          R result =controller.getPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

