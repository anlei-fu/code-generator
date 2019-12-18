package com.undefined.service;

import com.undefined.pojo.entity.UserWallet;

public interface UserWalletService {

    boolean addUserWallet(AddUserWalletReq req);

    boolean deleteUserWalletById(Integer id);

    boolean updateUserWalletById(Integer id, UpdateUserWalletByIdReq req);

    UserWallet getUserWalletById(Integer id);

    PageInfo<UserWallet> getUserWalletList(GetUserWalletListReq req);
}