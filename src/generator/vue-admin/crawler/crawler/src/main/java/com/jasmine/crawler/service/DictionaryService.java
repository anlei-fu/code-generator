/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.service;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.Dictionary;
import com.jasmine.crawler.pojo.req.AddDictionaryReq;
import com.jasmine.crawler.pojo.req.GetDictionaryPageReq;
import com.jasmine.crawler.pojo.req.UpdateDictionaryReq;
import com.jasmine.crawler.pojo.resp.PageResult;

public interface DictionaryService {

    boolean add(String createUser, AddDictionaryReq req);

    boolean deleteById(Integer id);

    boolean updateById(Integer id, String lastUpdateUser, UpdateDictionaryReq req);

    Dictionary getById(Integer id);

    PageResult<Dictionary> getPage(GetDictionaryPageReq req);

}