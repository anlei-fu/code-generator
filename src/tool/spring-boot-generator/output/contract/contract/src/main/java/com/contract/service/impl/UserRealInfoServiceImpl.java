package com.contract.service.impl;

import com.contract.mapper.UserRealInfoMapper;
import com.contract.pojo.entity.UserRealInfo;
import com.contract.pojo.entity.UserRealInfo;
import com.contract.pojo.param.UpdateUserRealInfoByUserIdParams;
import com.contract.pojo.req.AddUserRealInfoReq;
import com.contract.pojo.req.GetUserRealInfoListReq;
import com.contract.pojo.req.UpdateUserRealInfoByUserIdReq;
import com.contract.service.UserRealInfoService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserRealInfoServiceImpl implements UserRealInfoService {

    @Autowired
    private UserRealInfoMapper userRealInfoMapper;

    @Override
    public boolean addUserRealInfo(AddUserRealInfoReq req) {
        return userRealInfoMapper.addUserRealInfo(req) > 0;
    }

    @Override
    public boolean deleteUserRealInfoByUserId(Integer userId) {
        return userRealInfoMapper.deleteUserRealInfoByUserId(userId) > 0;
    }

    @Override
    public boolean updateUserRealInfoByUserId(Integer userId, UpdateUserRealInfoByUserIdReq req) {
        UpdateUserRealInfoByUserIdParams params = new UpdateUserRealInfoByUserIdParams(userId, req);
        return userRealInfoMapper.updateUserRealInfoByUserId(params) > 0;
    }

    @Override
    public UserRealInfo getUserRealInfoByUserId(Integer userId) {
        return userRealInfoMapper.getUserRealInfoByUserId(userId);
    }

    @Override
    public PageInfo<UserRealInfo> getUserRealInfoList(GetUserRealInfoListReq req) {
        return PageHelperUtils.paging(req, () -> userRealInfoMapper.getUserRealInfoList(req));
    }

}

