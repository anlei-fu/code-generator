package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.AdminInfo;
import com.spider.pojo.req.AddAdminInfoReq;
import com.spider.pojo.req.GetAdminInfoListReq;
import com.spider.pojo.req.UpdateAdminInfoByIdReq;


public interface AdminInfoService {

    boolean addAdminInfo(AddAdminInfoReq req);
    
    boolean deleteAdminInfoById(Integer id);
    
    boolean updateAdminInfoById(Integer id, UpdateAdminInfoByIdReq req);
    
    AdminInfo getAdminInfoById(Integer id);
    
    PageInfo<AdminInfo> getAdminInfoList(GetAdminInfoListReq req);

}