/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.Application;
import com.jasmine.crud.TestUtils;
import com.jasmine.crud.controller.DictionaryController;
import com.jasmine.crud.pojo.req.AddDictionaryReq;
import com.jasmine.crud.pojo.req.GetDictionaryPageReq;
import com.jasmine.crud.pojo.req.UpdateDictionaryReq;
import com.jasmine.crud.pojo.resp.R;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * DictionaryService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Mon Apr 26 2021 15:27:14 GMT+0800 (GMT+08:00)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class DictionaryServiceTest {

    @Autowired
    private DictionaryController controller;

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

                AddDictionaryReq req =new AddDictionaryReq();

                                         req.setName("lily");
                                         req.setType("mock string");
                                         req.setValue("mock string");

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
     * update 
     *
     */
    @Test
    public void testUpdate(){

                UpdateDictionaryReq req =new UpdateDictionaryReq();

                                         req.setId(29);
                                         req.setName("jasmine");
                                         req.setType("mock string");
                                         req.setValue("mock string");

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

                GetDictionaryPageReq req =new GetDictionaryPageReq();

                                         req.setName("narcissus");
                                         req.setType("mock string");

          R result =controller.getDetailPage(

                                        req 

                        );

                 TestUtils.printQuery(req,result);

    }
} 

