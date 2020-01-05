package com.authority.service;

import com.authority.pojo.entity.UserInfo;
import com.authority.pojo.req.AddUserInfoReq;
import com.authority.pojo.req.GetUserInfoListReq;
import com.authority.pojo.req.UpdateUserInfoByAccountReq;
import com.github.pagehelper.PageInfo;


public interface UserInfoService {

    boolean addUserInfo(AddUserInfoReq req);
    
    boolean deleteUserInfoByAccount(Integer account);
    
    boolean updateUserInfoByAccount(Integer account, UpdateUserInfoByAccountReq req);
    
    UserInfo getUserInfoByAccount(Integer account);
    
    PageInfo<UserInfo> getUserInfoList(GetUserInfoListReq req);

}