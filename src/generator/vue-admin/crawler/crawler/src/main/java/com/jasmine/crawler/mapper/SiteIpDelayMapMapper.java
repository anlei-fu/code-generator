/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.mapper;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.SiteIpDelayMap;
import com.jasmine.crawler.pojo.req.GetSiteIpDelayMapPageReq;
import org.mapstruct.Mapper;

@Mapper
public interface SiteIpDelayMapMapper {

    Page<SiteIpDelayMap> getPage(GetSiteIpDelayMapPageReq req);

}
