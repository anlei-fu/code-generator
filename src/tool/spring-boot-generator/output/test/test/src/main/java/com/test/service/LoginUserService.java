package com.test.service;

import com.test.pojo.entity.LoginUser;
import com.test.pojo.req.AddLoginUserReq;
import com.test.pojo.req.GetLoginUserListReq;
import com.test.pojo.req.UpdateLoginUserByIdReq;
import com.github.pagehelper.PageInfo;


public interface LoginUserService {

    boolean addLoginUser(AddLoginUserReq req);

    boolean deleteLoginUserById(Integer id);

    boolean updateLoginUserById(Integer id, UpdateLoginUserByIdReq req);

    LoginUser getLoginUserById(Integer id);

    PageInfo<LoginUser> getLoginUserList(GetLoginUserListReq req);
}