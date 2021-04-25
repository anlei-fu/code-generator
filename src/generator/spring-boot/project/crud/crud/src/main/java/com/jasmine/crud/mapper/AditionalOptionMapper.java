/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-25 6:53:03 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.mapper;

import com.github.pagehelper.Page;
import com.jasmine.crud.pojo.entity.AditionalOption;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.GetAditionalOptionPageReq;
import com.jasmine.crud.pojo.resp.*;
import tk.mybatis.mapper.common.Mapper;

public interface AditionalOptionMapper extends Mapper<AditionalOption> {

    Page<AditionalOptionDetailResp> getDetailPage(GetAditionalOptionPageReq req);

}
