package com.undefined.service;

import com.undefined.pojo.entity.UserInfo;

public interface UserInfoService {

    boolean addUserInfo(AddUserInfoReq req);

    boolean deleteUserInfoById(Integer id);

    boolean updateUserInfoById(Integer id, UpdateUserInfoByIdReq req);

    UserInfo getUserInfoById(Integer id);

    PageInfo<UserInfo> getUserInfoList(GetUserInfoListReq req);
}