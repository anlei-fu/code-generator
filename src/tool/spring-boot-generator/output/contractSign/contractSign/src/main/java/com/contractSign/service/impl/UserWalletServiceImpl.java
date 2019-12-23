package com.contractSign.service;



public interface @nameService {

    boolean addUserWallet(AddUserWalletReq req);
    boolean deleteUserWalletById(Integer id);
    boolean updateUserWalletById(Integer id, UpdateUserWalletByIdReq req);
    UserWallet getUserWalletById(Integer id);
    PageInfo<UserWallet> getUserWalletList(GetUserWalletListReq req);

}