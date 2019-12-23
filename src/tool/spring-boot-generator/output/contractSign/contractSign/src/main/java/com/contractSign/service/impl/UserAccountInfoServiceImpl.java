package com.contractSign.service;



public interface @nameService {

    boolean addUserAccountInfo(AddUserAccountInfoReq req);
    boolean deleteUserAccountInfoById(Integer id);
    boolean updateUserAccountInfoById(Integer id, UpdateUserAccountInfoByIdReq req);
    UserAccountInfo getUserAccountInfoById(Integer id);
    PageInfo<UserAccountInfo> getUserAccountInfoList(GetUserAccountInfoListReq req);

}