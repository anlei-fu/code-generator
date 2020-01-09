package com.contract.service.impl;

import com.contract.mapper.UserSignSealMapper;
import com.contract.pojo.entity.UserSignSeal;
import com.contract.pojo.entity.UserSignSeal;
import com.contract.pojo.param.UpdateUserSignSealByIdParams;
import com.contract.pojo.req.AddUserSignSealReq;
import com.contract.pojo.req.GetUserSignSealListReq;
import com.contract.pojo.req.UpdateUserSignSealByIdReq;
import com.contract.service.UserSignSealService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserSignSealServiceImpl implements UserSignSealService {

    @Autowired
    private UserSignSealMapper userSignSealMapper;

    @Override
    public boolean addUserSignSeal(AddUserSignSealReq req) {
        return userSignSealMapper.addUserSignSeal(req) > 0;
    }

    @Override
    public boolean deleteUserSignSealById(Integer id) {
        return userSignSealMapper.deleteUserSignSealById(id) > 0;
    }

    @Override
    public boolean updateUserSignSealById(Integer id, UpdateUserSignSealByIdReq req) {
        UpdateUserSignSealByIdParams params = new UpdateUserSignSealByIdParams(id, req);
        return userSignSealMapper.updateUserSignSealById(params) > 0;
    }

    @Override
    public UserSignSeal getUserSignSealById(Integer id) {
        return userSignSealMapper.getUserSignSealById(id);
    }

    @Override
    public PageInfo<UserSignSeal> getUserSignSealList(GetUserSignSealListReq req) {
        return PageHelperUtils.paging(req, () -> userSignSealMapper.getUserSignSealList(req));
    }

}

