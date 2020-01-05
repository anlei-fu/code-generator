package com.authority.service;

import com.authority.pojo.entity.SystemInfo;
import com.authority.pojo.req.AddSystemInfoReq;
import com.authority.pojo.req.GetSystemInfoListReq;
import com.authority.pojo.req.UpdateSystemInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface SystemInfoService {

    boolean addSystemInfo(AddSystemInfoReq req);
    
    boolean deleteSystemInfoById(Integer id);
    
    boolean updateSystemInfoById(Integer id, UpdateSystemInfoByIdReq req);
    
    SystemInfo getSystemInfoById(Integer id);
    
    PageInfo<SystemInfo> getSystemInfoList(GetSystemInfoListReq req);

}