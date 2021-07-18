/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.service.impl;

import com.jasmine.crud1.Application;
import com.jasmine.crud1.TestUtils;
import com.jasmine.crud1.controller.CasscaderController;
import com.jasmine.crud1.pojo.req.AddCasscaderReq;
import com.jasmine.crud1.pojo.req.GetCasscaderPageReq;
import com.jasmine.crud1.pojo.req.UpdateCasscaderReq;
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
 * CasscaderService Tester.
 *
 * @author fuanlei
 * @version 1.0
 * @since Wed Jun 09 2021 17:28:12 GMT+0800 (China Standard Time)
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
public class CasscaderServiceTest {

    @Autowired
    private CasscaderController controller;

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
        
                AddCasscaderReq req =new AddCasscaderReq();
                 
                                         req.setProjectId(29);
                                         req.setContent("every adult once ever been a child ,but few she or he can remember what it looks like at that time ");
         
         
         
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
                        
                                
                                        
                                                6 
                                         
                                
                        );
         

        
                 TestUtils.print(result);
        
    }    /**
     * update 
     *
     */
    @Test
    public void testUpdate(){
        
                UpdateCasscaderReq req =new UpdateCasscaderReq();
                 
                                         req.setId(35);
                                         req.setProjectId(29);
                                         req.setContent("every adult once ever been a child ,but few she or he can remember what it looks like at that time ");
         
         
         
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
        
                GetCasscaderPageReq req =new GetCasscaderPageReq();
                 
                                         req.setUpdateTimeStart(new Date());
                                         req.setUpdateTimeEnd(new Date());
         
         
        
          R result =controller.getDetailPage(
          
                                
                                        
                                        req 
                                         
                                  
                        );
         

        
                 TestUtils.printQuery(req,result);
        
    }
} 

