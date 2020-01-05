package com.authority.service;

import com.authority.pojo.entity.SystemRoleInfo;
import com.authority.pojo.req.AddSystemRoleInfoReq;
import com.authority.pojo.req.GetSystemRoleInfoListReq;
import com.authority.pojo.req.UpdateSystemRoleInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface SystemRoleInfoService {

    boolean addSystemRoleInfo(AddSystemRoleInfoReq req);
    
    boolean deleteSystemRoleInfoById(Integer id);
    
    boolean updateSystemRoleInfoById(Integer id, UpdateSystemRoleInfoByIdReq req);
    
    SystemRoleInfo getSystemRoleInfoById(Integer id);
    
    PageInfo<SystemRoleInfo> getSystemRoleInfoList(GetSystemRoleInfoListReq req);

}