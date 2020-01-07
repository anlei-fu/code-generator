package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.UserWallet;
import com.spider.pojo.req.AddUserWalletReq;
import com.spider.pojo.req.GetUserWalletListReq;
import com.spider.pojo.req.UpdateUserWalletByIdReq;


public interface UserWalletService {

    boolean addUserWallet(AddUserWalletReq req);
    
    boolean deleteUserWalletById(Integer id);
    
    boolean updateUserWalletById(Integer id, UpdateUserWalletByIdReq req);
    
    UserWallet getUserWalletById(Integer id);
    
    PageInfo<UserWallet> getUserWalletList(GetUserWalletListReq req);

}