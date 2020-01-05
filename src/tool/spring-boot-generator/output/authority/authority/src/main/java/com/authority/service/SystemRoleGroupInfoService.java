package com.authority.service;

import com.authority.pojo.entity.SystemRoleGroupInfo;
import com.authority.pojo.req.AddSystemRoleGroupInfoReq;
import com.authority.pojo.req.GetSystemRoleGroupInfoListReq;
import com.authority.pojo.req.UpdateSystemRoleGroupInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface SystemRoleGroupInfoService {

    boolean addSystemRoleGroupInfo(AddSystemRoleGroupInfoReq req);
    
    boolean deleteSystemRoleGroupInfoById(Integer id);
    
    boolean updateSystemRoleGroupInfoById(Integer id, UpdateSystemRoleGroupInfoByIdReq req);
    
    SystemRoleGroupInfo getSystemRoleGroupInfoById(Integer id);
    
    PageInfo<SystemRoleGroupInfo> getSystemRoleGroupInfoList(GetSystemRoleGroupInfoListReq req);

}