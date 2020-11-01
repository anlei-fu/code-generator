/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.mapper;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.DownSystemSite;
import com.jasmine.crawler.pojo.param.UpdateDownSystemSiteParams;
import com.jasmine.crawler.pojo.req.AddDownSystemSiteReq;
import com.jasmine.crawler.pojo.req.GetDownSystemSitePageReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

@Mapper
public interface DownSystemSiteMapper {

    int add(AddDownSystemSiteReq req);

    int deleteById(@Param("id") Integer id);

    int updateById(UpdateDownSystemSiteParams param);

    DownSystemSite getById(@Param("id") Integer id);

    Page<DownSystemSite> getPage(GetDownSystemSitePageReq req);

}
