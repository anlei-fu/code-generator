package com.undefined.service;

import com.undefined.pojo.entity.LoginUser;

public interface LoginUserService {

    boolean addLoginUser(AddLoginUserReq req);

    boolean deleteLoginUserById(Integer id);

    boolean updateLoginUserById(Integer id, UpdateLoginUserByIdReq req);

    LoginUser getLoginUserById(Integer id);

    PageInfo<LoginUser> getLoginUserList(GetLoginUserListReq req);
}