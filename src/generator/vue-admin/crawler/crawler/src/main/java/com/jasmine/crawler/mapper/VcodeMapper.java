/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.mapper;

import com.github.pagehelper.Page;
import com.jasmine.crawler.pojo.entity.Vcode;
import com.jasmine.crawler.pojo.param.UpdateVcodeParams;
import com.jasmine.crawler.pojo.req.AddVcodeReq;
import com.jasmine.crawler.pojo.req.GetVcodePageReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

@Mapper
public interface VcodeMapper {

    int add(AddVcodeReq req);

    int deleteById(@Param("id") Integer id);

    int updateById(UpdateVcodeParams param);

    Vcode getById(@Param("id") Integer id);

    Page<Vcode> getPage(GetVcodePageReq req);

}
