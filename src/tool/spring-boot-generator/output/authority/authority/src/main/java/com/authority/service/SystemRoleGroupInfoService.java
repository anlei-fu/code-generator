package com.authority.service;

import com.authority.pojo.entity.SystemRoleGroupInfo;
import com.authority.pojo.req.AddSystemRoleGroupInfoReq;
import com.authority.pojo.req.GetSystemRoleGroupInfoListReq;
import com.authority.pojo.req.UpdateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndIdReq;
import com.github.pagehelper.PageInfo;


public interface SystemRoleGroupInfoService {

    boolean addSystemRoleGroupInfo(AddSystemRoleGroupInfoReq req, String user);
    
    boolean deleteSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(Integer id);
    
    boolean updateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(Integer id, UpdateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndIdReq req);
    
    SystemRoleGroupInfo getSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(Integer id);
    
    PageInfo<SystemRoleGroupInfo> getSystemRoleGroupInfoList(GetSystemRoleGroupInfoListReq req);

}