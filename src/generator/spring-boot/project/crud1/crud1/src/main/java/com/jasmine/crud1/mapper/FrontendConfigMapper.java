/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/9/2021, 5:28:12 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud1.mapper;

import com.github.pagehelper.Page;
import com.jasmine.crud.pojo.entity.FrontendConfig;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud1.pojo.req.GetFrontendConfigPageReq;
import tk.mybatis.mapper.common.Mapper;


public interface FrontendConfigMapper extends Mapper<FrontendConfig> {
        
    Page<FrontendConfigDetailResp> getDetailPage(GetFrontendConfigPageReq req);

   
}
