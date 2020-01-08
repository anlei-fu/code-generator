package com.authority.service;

import com.authority.pojo.entity.UserInfo;
import com.authority.pojo.req.AddUserInfoReq;
import com.authority.pojo.req.GetUserInfoListReq;
import com.authority.pojo.req.UpdateUserInfoByUserAndUserAndUserAndUserAndAccountReq;
import com.github.pagehelper.PageInfo;


public interface UserInfoService {

    boolean addUserInfo(AddUserInfoReq req, String user);
    
    boolean deleteUserInfoByUserAndUserAndUserAndUserAndAccount(String account);
    
    boolean updateUserInfoByUserAndUserAndUserAndUserAndAccount(String account, UpdateUserInfoByUserAndUserAndUserAndUserAndAccountReq req);
    
    UserInfo getUserInfoByUserAndUserAndUserAndUserAndAccount(String account);
    
    PageInfo<UserInfo> getUserInfoList(GetUserInfoListReq req);

}