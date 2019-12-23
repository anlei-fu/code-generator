package com.contractSign.service;



public interface @nameService {

    boolean addUserPurchaseRecord(AddUserPurchaseRecordReq req);
    boolean deleteUserPurchaseRecordById(Integer id);
    boolean updateUserPurchaseRecordById(Integer id, UpdateUserPurchaseRecordByIdReq req);
    UserPurchaseRecord getUserPurchaseRecordById(Integer id);
    PageInfo<UserPurchaseRecord> getUserPurchaseRecordList(GetUserPurchaseRecordListReq req);

}