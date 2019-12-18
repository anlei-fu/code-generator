package com.undefined.service.impl;

import com.undefined.mapper.UserWalletMapper;
import com.undefined.pojo.entity.UserWallet;
import com.spider.service.UserWalletService;
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
        return userWalletMapper.updateUserWalletById(id, req) > 0;
    }


    @Override
    public UserWallet getUserWalletById(Integer id) {
        return userWalletMapper.getUserWalletById(id);
    }


    @Override
    public PageInfo<UserWallet> getUserWalletList(GetUserWalletListReq req) {
        return userWalletMapper.getUserWalletList(req);
    }
}
