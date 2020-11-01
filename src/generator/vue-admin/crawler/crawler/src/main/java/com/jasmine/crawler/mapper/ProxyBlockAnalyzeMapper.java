/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.mapper;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.ProxyBlockAnalyze;
import com.jasmine.crawler.pojo.param.UpdateProxyBlockAnalyzeParams;
import com.jasmine.crawler.pojo.req.AddProxyBlockAnalyzeReq;
import com.jasmine.crawler.pojo.req.GetProxyBlockAnalyzePageReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

@Mapper
public interface ProxyBlockAnalyzeMapper {

    int add(AddProxyBlockAnalyzeReq req);

    int deleteById(@Param("id") Integer id);

    int updateById(UpdateProxyBlockAnalyzeParams param);

    ProxyBlockAnalyze getById(@Param("id") Integer id);

    Page<ProxyBlockAnalyze> getPage(GetProxyBlockAnalyzePageReq req);

}
