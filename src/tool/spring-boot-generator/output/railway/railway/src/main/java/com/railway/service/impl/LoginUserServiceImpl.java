package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.LoginUserMapper;
import com.railway.pojo.entity.LoginUser;
import com.railway.pojo.entity.LoginUser;
import com.railway.pojo.req.AddLoginUserReq;
import com.railway.pojo.req.GetLoginUserListReq;
import com.railway.pojo.req.UpdateLoginUserByIdReq;
import com.railway.service.LoginUserService;
import com.railway.utils.PageHelperUtils;
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
        params params = new UpdateLoginUserByIdParams(id, req)
        return loginUserMapper.updateLoginUserById(params) > 0;
    }

    @Override
    public LoginUser getLoginUserById(Integer id) {
        return loginUserMapper.getLoginUserById(id);
    }

    @Override
    public PageInfo<LoginUser> getLoginUserList(GetLoginUserListReq req) {
        return PageHelperUtils.page(()=> loginUserMapper.getLoginUserList(req));
    }

}
