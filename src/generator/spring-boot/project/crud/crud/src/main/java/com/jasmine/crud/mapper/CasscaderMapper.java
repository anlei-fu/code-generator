/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 6:11:52 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.mapper;

import com.github.pagehelper.Page;
import com.jasmine.crud.pojo.entity.Casscader;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.GetCasscaderPageReq;
import com.jasmine.crud.pojo.resp.*;
import tk.mybatis.mapper.common.Mapper;


public interface CasscaderMapper extends Mapper<Casscader> {
        
    Page<CasscaderDetailResp> getDetailPage(GetCasscaderPageReq req);

   
}
