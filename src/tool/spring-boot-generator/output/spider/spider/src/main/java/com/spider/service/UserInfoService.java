package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.UserInfo;
import com.spider.pojo.req.AddUserInfoReq;
import com.spider.pojo.req.GetUserInfoListReq;
import com.spider.pojo.req.UpdateUserInfoByIdReq;


public interface UserInfoService {

    boolean addUserInfo(AddUserInfoReq req);
    
    boolean deleteUserInfoById(Integer id);
    
    boolean updateUserInfoById(Integer id, UpdateUserInfoByIdReq req);
    
    UserInfo getUserInfoById(Integer id);
    
    PageInfo<UserInfo> getUserInfoList(GetUserInfoListReq req);

}