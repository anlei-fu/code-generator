package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.LoginUser;
import com.railway.pojo.req.AddLoginUserReq;
import com.railway.pojo.req.GetLoginUserListReq;
import com.railway.pojo.req.UpdateLoginUserByIdReq;


public interface LoginUserService {

    boolean addLoginUser(AddLoginUserReq req);
    
    boolean deleteLoginUserById(Integer id);
    
    boolean updateLoginUserById(Integer id, UpdateLoginUserByIdReq req);
    
    LoginUser getLoginUserById(Integer id);
    
    PageInfo<LoginUser> getLoginUserList(GetLoginUserListReq req);

}