/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.Url;
import com.jasmine.crawler.pojo.req.AddUrlReq;
import com.jasmine.crawler.pojo.req.GetUrlPageReq;
import com.jasmine.crawler.pojo.req.UpdateUrlReq;
import com.jasmine.crawler.pojo.resp.PageResult;

public interface UrlService {

    boolean add(AddUrlReq req);

    boolean deleteByUrl(String url);

    boolean updateByUrl(String url, UpdateUrlReq req);

    Url getByUrl(String url);

    PageResult<Url> getPage(GetUrlPageReq req);

}
