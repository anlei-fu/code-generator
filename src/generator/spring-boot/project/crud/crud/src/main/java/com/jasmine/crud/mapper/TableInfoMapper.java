/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.mapper;

import com.github.pagehelper.Page;
import com.jasmine.crud.pojo.entity.TableInfo;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.GetTableInfoPageReq;
import com.jasmine.crud.pojo.resp.*;
import tk.mybatis.mapper.common.Mapper;

public interface TableInfoMapper extends Mapper<TableInfo> {

    Page<TableInfoDetailResp> getDetailPage(GetTableInfoPageReq req);

}
