package com.authority.service;

import com.authority.pojo.entity.SystemRoleInfo;
import com.authority.pojo.req.AddSystemRoleInfoReq;
import com.authority.pojo.req.GetSystemRoleInfoListReq;
import com.authority.pojo.req.UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdReq;
import com.github.pagehelper.PageInfo;


public interface SystemRoleInfoService {

    boolean addSystemRoleInfo(AddSystemRoleInfoReq req, String user);
    
    boolean deleteSystemRoleInfoByUserAndUserAndUserAndUserAndId(Integer id);
    
    boolean updateSystemRoleInfoByUserAndUserAndUserAndUserAndId(Integer id, UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdReq req);
    
    SystemRoleInfo getSystemRoleInfoByUserAndUserAndUserAndUserAndId(Integer id);
    
    PageInfo<SystemRoleInfo> getSystemRoleInfoList(GetSystemRoleInfoListReq req);

}