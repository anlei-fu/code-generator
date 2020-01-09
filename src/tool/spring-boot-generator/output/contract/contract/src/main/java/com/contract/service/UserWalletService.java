package com.contract.service;

import com.contract.pojo.entity.UserWallet;
import com.contract.pojo.req.AddUserWalletReq;
import com.contract.pojo.req.GetUserWalletListReq;
import com.contract.pojo.req.UpdateUserWalletByIdReq;
import com.github.pagehelper.PageInfo;

public interface UserWalletService {

    boolean addUserWallet(AddUserWalletReq req);

    boolean deleteUserWalletById(Integer id);

    boolean updateUserWalletById(Integer id, UpdateUserWalletByIdReq req);

    UserWallet getUserWalletById(Integer id);

    PageInfo<UserWallet> getUserWalletList(GetUserWalletListReq req);

}
