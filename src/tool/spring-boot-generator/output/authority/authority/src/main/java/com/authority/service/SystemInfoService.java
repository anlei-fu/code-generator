package com.authority.service;

import com.authority.pojo.entity.SystemInfo;
import com.authority.pojo.req.AddSystemInfoReq;
import com.authority.pojo.req.GetSystemInfoListReq;
import com.authority.pojo.req.UpdateSystemInfoByUserAndUserAndUserAndUserAndIdReq;
import com.github.pagehelper.PageInfo;


public interface SystemInfoService {

    boolean addSystemInfo(AddSystemInfoReq req, String user);
    
    boolean deleteSystemInfoByUserAndUserAndUserAndUserAndId(Integer id);
    
    boolean updateSystemInfoByUserAndUserAndUserAndUserAndId(Integer id, UpdateSystemInfoByUserAndUserAndUserAndUserAndIdReq req);
    
    SystemInfo getSystemInfoByUserAndUserAndUserAndUserAndId(Integer id);
    
    PageInfo<SystemInfo> getSystemInfoList(GetSystemInfoListReq req);

}