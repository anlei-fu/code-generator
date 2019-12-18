package com.undefined.service;

import com.undefined.pojo.entity.AdminInfo;

public interface AdminInfoService {

    boolean addAdminInfo(AddAdminInfoReq req);

    boolean deleteAdminInfoById(Integer id);

    boolean updateAdminInfoById(Integer id, UpdateAdminInfoByIdReq req);

    AdminInfo getAdminInfoById(Integer id);

    PageInfo<AdminInfo> getAdminInfoList(GetAdminInfoListReq req);
}