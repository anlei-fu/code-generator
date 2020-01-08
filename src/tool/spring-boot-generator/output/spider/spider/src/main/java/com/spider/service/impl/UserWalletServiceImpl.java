package com.spider.service.impl;

import com.github.pagehelper.PageInfo;
import com.spider.mapper.UserWalletMapper;
import com.spider.pojo.entity.UserWallet;
import com.spider.pojo.entity.UserWallet;
import com.spider.pojo.req.AddUserWalletReq;
import com.spider.pojo.req.GetUserWalletListReq;
import com.spider.pojo.req.UpdateUserWalletByIdReq;
import com.spider.service.UserWalletService;
import com.spider.utils.PageHelperUtils;
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
        params params = new UpdateUserWalletByIdParams(id, req)
        return userWalletMapper.updateUserWalletById(params) > 0;
    }

    @Override
    public UserWallet getUserWalletById(Integer id) {
        return userWalletMapper.getUserWalletById(id);
    }

    @Override
    public PageInfo<UserWallet> getUserWalletList(GetUserWalletListReq req) {
        return PageHelperUtils.page(()=> userWalletMapper.getUserWalletList(req));
    }

}
