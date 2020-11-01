/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.DownSystemAnalyze;
import com.jasmine.crawler.pojo.req.AddDownSystemAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetDownSystemAnalyzePageReq;
import com.jasmine.crawler.pojo.req.UpdateDownSystemAnalyzeReq;
import com.jasmine.crawler.pojo.resp.PageResult;

public interface DownSystemAnalyzeService {

    boolean add(AddDownSystemAnalyzeReq req);

    boolean deleteById(Integer id);

    boolean updateById(Integer id, UpdateDownSystemAnalyzeReq req);

    DownSystemAnalyze getById(Integer id);

    PageResult<DownSystemAnalyze> getPage(GetDownSystemAnalyzePageReq req);

}
