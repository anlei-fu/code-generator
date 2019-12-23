package com.contractSign.service;



public interface @nameService {

    boolean addUserRealInfo(AddUserRealInfoReq req);
    boolean deleteUserRealInfoByUserId(Integer userId);
    boolean updateUserRealInfoByUserId(Integer userId, UpdateUserRealInfoByUserIdReq req);
    UserRealInfo getUserRealInfoByUserId(Integer userId);
    PageInfo<UserRealInfo> getUserRealInfoList(GetUserRealInfoListReq req);

}