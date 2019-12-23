package com.spider.service.impl;

import com.github.pagehelper.PageInfo;
import com.spider.mapper.UserInfoMapper;
import com.spider.pojo.entity.UserInfo;
import com.spider.pojo.entity.UserInfo;
import com.spider.pojo.req.AddUserInfoReq;
import com.spider.pojo.req.GetUserInfoListReq;
import com.spider.pojo.req.UpdateUserInfoByIdReq;
import com.spider.service.UserInfoService;
import com.spider.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserInfoServiceImpl implements UserInfoService {

    @Autowired
    private UserInfoMapper userInfoMapper;

    @Override
    public boolean addUserInfo(AddUserInfoReq req) {
        return userInfoMapper.addUserInfo(req) > 0;
    }

    @Override
    public boolean deleteUserInfoById(Integer id) {
        return userInfoMapper.deleteUserInfoById(id) > 0;
    }

    @Override
    public boolean updateUserInfoById(Integer id, UpdateUserInfoByIdReq req) {
        return userInfoMapper.updateUserInfoById(id, req) > 0;
    }

    @Override
    public UserInfo getUserInfoById(Integer id) {
        return userInfoMapper.getUserInfoById(id);
    }

    @Override
    public PageInfo<UserInfo> getUserInfoList(GetUserInfoListReq req) {
        return userInfoMapper.getUserInfoList(req);
    }

}
