package com.contractSign.service;



public interface @nameService {

    boolean addUserContactInfo(AddUserContactInfoReq req);
    boolean deleteUserContactInfoById(Integer id);
    boolean updateUserContactInfoById(Integer id, UpdateUserContactInfoByIdReq req);
    UserContactInfo getUserContactInfoById(Integer id);
    PageInfo<UserContactInfo> getUserContactInfoList(GetUserContactInfoListReq req);

}