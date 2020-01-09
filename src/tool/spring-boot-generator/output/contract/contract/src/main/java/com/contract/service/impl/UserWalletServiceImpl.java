package com.contract.service.impl;

import com.contract.mapper.UserWalletMapper;
import com.contract.pojo.entity.UserWallet;
import com.contract.pojo.entity.UserWallet;
import com.contract.pojo.param.UpdateUserWalletByIdParams;
import com.contract.pojo.req.AddUserWalletReq;
import com.contract.pojo.req.GetUserWalletListReq;
import com.contract.pojo.req.UpdateUserWalletByIdReq;
import com.contract.service.UserWalletService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserWalletServiceImpl implements UserWalletService {

    @Autowired
    private UserWalletMapper userWalletMapper;

    @Override
    public boolean addUserWallet(AddUserWalletReq req) {
        return userWalletMapper.addUserWallet(req) > 0;
    }

    @Override
    public boolean deleteUserWalletById(Integer id) {
        return userWalletMapper.deleteUserWalletById(id) > 0;
    }

    @Override
    public boolean updateUserWalletById(Integer id, UpdateUserWalletByIdReq req) {
        UpdateUserWalletByIdParams params = new UpdateUserWalletByIdParams(id, req);
        return userWalletMapper.updateUserWalletById(params) > 0;
    }

    @Override
    public UserWallet getUserWalletById(Integer id) {
        return userWalletMapper.getUserWalletById(id);
    }

    @Override
    public PageInfo<UserWallet> getUserWalletList(GetUserWalletListReq req) {
        return PageHelperUtils.paging(req, () -> userWalletMapper.getUserWalletList(req));
    }

}

