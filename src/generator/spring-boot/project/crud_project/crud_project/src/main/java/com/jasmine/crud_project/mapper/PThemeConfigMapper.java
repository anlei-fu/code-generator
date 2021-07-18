/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.mapper;

import com.github.pagehelper.Page;
import com.jasmine.crud_project.pojo.entity.PThemeConfig;
import com.jasmine.crud_project.pojo.req.*;
import com.jasmine.crud_project.pojo.req.GetPThemeConfigPageReq;
import com.jasmine.crud_project.pojo.resp.*;
import tk.mybatis.mapper.common.Mapper;


public interface PThemeConfigMapper extends Mapper<PThemeConfig> {
        
    Page<PThemeConfigDetailResp> getDetailPage(GetPThemeConfigPageReq req);

   
}
