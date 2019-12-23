package com.contractSign.service;



public interface @nameService {

    boolean addUserSignSeal(AddUserSignSealReq req);
    boolean deleteUserSignSealById(Integer id);
    boolean updateUserSignSealById(Integer id, UpdateUserSignSealByIdReq req);
    UserSignSeal getUserSignSealById(Integer id);
    PageInfo<UserSignSeal> getUserSignSealList(GetUserSignSealListReq req);

}