/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.mapper;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.SiteBlockAnalyze;
import com.jasmine.crawler.pojo.param.UpdateSiteBlockAnalyzeParams;
import com.jasmine.crawler.pojo.req.AddSiteBlockAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetSiteBlockAnalyzePageReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

@Mapper
public interface SiteBlockAnalyzeMapper {

    int add(AddSiteBlockAnalyzeReq req);

    int deleteById(@Param("id") Integer id);

    int updateById(UpdateSiteBlockAnalyzeParams param);

    SiteBlockAnalyze getById(@Param("id") Integer id);

    Page<SiteBlockAnalyze> getPage(GetSiteBlockAnalyzePageReq req);

}
