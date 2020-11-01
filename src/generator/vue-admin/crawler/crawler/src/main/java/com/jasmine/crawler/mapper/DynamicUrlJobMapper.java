/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.mapper;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.DynamicUrlJob;
import com.jasmine.crawler.pojo.param.UpdateDynamicUrlJobParams;
import com.jasmine.crawler.pojo.req.AddDynamicUrlJobReq;
import com.jasmine.crawler.pojo.req.GetDynamicUrlJobPageReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

@Mapper
public interface DynamicUrlJobMapper {

    int add(AddDynamicUrlJobReq req);

    int deleteById(@Param("id") Integer id);

    int updateById(UpdateDynamicUrlJobParams param);

    DynamicUrlJob getById(@Param("id") Integer id);

    Page<DynamicUrlJob> getPage(GetDynamicUrlJobPageReq req);

}
