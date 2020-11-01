/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.Cookie;
import com.jasmine.crawler.pojo.req.AddCookieReq;
import com.jasmine.crawler.pojo.req.GetCookiePageReq;
import com.jasmine.crawler.pojo.req.UpdateCookieReq;
import com.jasmine.crawler.pojo.resp.PageResult;

public interface CookieService {

    boolean add(AddCookieReq req);

    boolean deleteById(Integer id);

    boolean updateById(Integer id, UpdateCookieReq req);

    Cookie getById(Integer id);

    PageResult<Cookie> getPage(GetCookiePageReq req);

}
