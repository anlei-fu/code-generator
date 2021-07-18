/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.service.impl;

import com.jasmine.crud1.Application;
import com.jasmine.crud1.TestUtils;
import com.jasmine.crud1.controller.FrontendConfigController;
import com.jasmine.crud1.pojo.req.AddFrontendConfigReq;
import com.jasmine.crud1.pojo.req.GetFrontendConfigPageReq;
import com.jasmine.crud1.pojo.req.UpdateFrontendConfigReq;
import com.jasmine.crud1.pojo.resp.R;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;


/**
 * FrontendConfigService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Wed Jun 09 2021 17:28:12 GMT+0800 (China Standard Time)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class FrontendConfigServiceTest {

    @Autowired
    private FrontendConfigController controller;

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
        
                AddFrontendConfigReq req =new AddFrontendConfigReq();
                 
                                         req.setProjectId(1);
                                         req.setContent("there're three paris in the world,the most  famous one in france ,one in canada ,and last one in texas,us");
         
         
         
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
                        
                                
                                        
                                                29 
                                         
                                
                        );
         

        
                 TestUtils.print(result);
        
    }    /**
     * update 
     *
     */
    @Test
    public void testUpdate(){
        
                UpdateFrontendConfigReq req =new UpdateFrontendConfigReq();
                 
                                         req.setId(6);
                                         req.setProjectId(29);
                                         req.setContent("there are three waterloon bridges in the wrold too...");
         
         
         
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
        
                GetFrontendConfigPageReq req =new GetFrontendConfigPageReq();
                 
                                         req.setUpdateTimeStart(new Date());
                                         req.setUpdateTimeEnd(new Date());
         
         
        
          R result =controller.getDetailPage(
          
                                
                                        
                                        req 
                                         
                                  
                        );
         

        
                 TestUtils.printQuery(req,result);
        
    }
} 

