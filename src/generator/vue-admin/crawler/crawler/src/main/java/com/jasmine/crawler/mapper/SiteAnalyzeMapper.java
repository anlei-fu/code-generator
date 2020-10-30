/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.mapper;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.SiteAnalyze;
import com.jasmine.crawler.pojo.param.UpdateSiteAnalyzeParams;
import com.jasmine.crawler.pojo.req.AddSiteAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetSiteAnalyzePageReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

@Mapper
public interface SiteAnalyzeMapper {

    int add(AddSiteAnalyzeReq req);

    int deleteById(@Param("id") Integer id);

    int updateById(UpdateSiteAnalyzeParams param);

    SiteAnalyze getById(@Param("id") Integer id);

    Page<SiteAnalyze> getPage(GetSiteAnalyzePageReq req);

}
