/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.service.impl;

import com.jasmine.crud1.Application;
import com.jasmine.crud1.TestUtils;
import com.jasmine.crud1.controller.EnumInfoController;
import com.jasmine.crud1.pojo.req.AddEnumInfoReq;
import com.jasmine.crud1.pojo.req.GetEnumInfoPageReq;
import com.jasmine.crud1.pojo.req.UpdateEnumInfoReq;
import com.jasmine.crud1.pojo.resp.R;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


/**
 * EnumInfoService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Wed Jun 09 2021 17:28:12 GMT+0800 (China Standard Time)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class EnumInfoServiceTest {

    @Autowired
    private EnumInfoController controller;

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
        
                AddEnumInfoReq req =new AddEnumInfoReq();
                 
                                         req.setProjectId(29);
                                         req.setContent("this is content mock...");
         
         
         
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
                        
                                
                                        
                                                "mock string" 
                                         
                                
                        );
         

        
                 TestUtils.print(result);
        
    }    /**
     * update 
     *
     */
    @Test
    public void testUpdate(){
        
                UpdateEnumInfoReq req =new UpdateEnumInfoReq();
                 
                                         req.setId("mock string");
                                         req.setProjectId(15);
                                         req.setContent("this is content mock...");
         
         
         
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
        
                GetEnumInfoPageReq req =new GetEnumInfoPageReq();
                 
         
         
        
          R result =controller.getDetailPage(
          
                                
                                        
                                        req 
                                         
                                  
                        );
         

        
                 TestUtils.printQuery(req,result);
        
    }
} 

