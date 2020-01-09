package com.contract.service.impl;

import com.contract.mapper.UserContactInfoMapper;
import com.contract.pojo.entity.UserContactInfo;
import com.contract.pojo.entity.UserContactInfo;
import com.contract.pojo.param.UpdateUserContactInfoByIdParams;
import com.contract.pojo.req.AddUserContactInfoReq;
import com.contract.pojo.req.GetUserContactInfoListReq;
import com.contract.pojo.req.UpdateUserContactInfoByIdReq;
import com.contract.service.UserContactInfoService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserContactInfoServiceImpl implements UserContactInfoService {

    @Autowired
    private UserContactInfoMapper userContactInfoMapper;

    @Override
    public boolean addUserContactInfo(AddUserContactInfoReq req) {
        return userContactInfoMapper.addUserContactInfo(req) > 0;
    }

    @Override
    public boolean deleteUserContactInfoById(Integer id) {
        return userContactInfoMapper.deleteUserContactInfoById(id) > 0;
    }

    @Override
    public boolean updateUserContactInfoById(Integer id, UpdateUserContactInfoByIdReq req) {
        UpdateUserContactInfoByIdParams params = new UpdateUserContactInfoByIdParams(id, req);
        return userContactInfoMapper.updateUserContactInfoById(params) > 0;
    }

    @Override
    public UserContactInfo getUserContactInfoById(Integer id) {
        return userContactInfoMapper.getUserContactInfoById(id);
    }

    @Override
    public PageInfo<UserContactInfo> getUserContactInfoList(GetUserContactInfoListReq req) {
        return PageHelperUtils.paging(req, () -> userContactInfoMapper.getUserContactInfoList(req));
    }

}

