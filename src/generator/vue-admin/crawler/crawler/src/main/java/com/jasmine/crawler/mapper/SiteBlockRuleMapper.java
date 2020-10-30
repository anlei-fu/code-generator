/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-28 4:23:10 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.mapper;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.SiteBlockRule;
import com.jasmine.crawler.pojo.param.UpdateSiteBlockRuleParams;
import com.jasmine.crawler.pojo.req.AddSiteBlockRuleReq;
import com.jasmine.crawler.pojo.req.GetSiteBlockRulePageReq;
import com.jasmine.crawler.pojo.resp.SiteBlockRuleDetailResp;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

@Mapper
public interface SiteBlockRuleMapper {

    int add(AddSiteBlockRuleReq req);

    int deleteById(@Param("id") Integer id);

    int updateById(UpdateSiteBlockRuleParams param);

    SiteBlockRule getById(@Param("id") Integer id);

    Page<SiteBlockRule> getPage(GetSiteBlockRulePageReq req);

    SiteBlockRuleDetailResp getDetailById(@Param("id") Integer id);

    Page<SiteBlockRuleDetailResp> getDetailPage(GetSiteBlockRulePageReq req);

}