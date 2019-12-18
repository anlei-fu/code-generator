package com.undefined.service.impl;

import com.undefined.mapper.LoginUserMapper;
import com.undefined.pojo.entity.LoginUser;
import com.spider.service.LoginUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginUserServiceImpl implements LoginUserService {

    @Autowired
    private LoginUserMapper loginUserMapper;

    @Override
    public boolean addLoginUser(AddLoginUserReq req) {
        return loginUserMapper.addLoginUser(req) > 0;
    }


    @Override
    public boolean deleteLoginUserById(Integer id) {
        return loginUserMapper.deleteLoginUserById(id) > 0;
    }


    @Override
    public boolean updateLoginUserById(Integer id, UpdateLoginUserByIdReq req) {
        return loginUserMapper.updateLoginUserById(id, req) > 0;
    }


    @Override
    public LoginUser getLoginUserById(Integer id) {
        return loginUserMapper.getLoginUserById(id);
    }


    @Override
    public PageInfo<LoginUser> getLoginUserList(GetLoginUserListReq req) {
        return loginUserMapper.getLoginUserList(req);
    }
}
