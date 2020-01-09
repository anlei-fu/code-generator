package com.contract.service;

import com.contract.pojo.entity.UserPurchaseRecord;
import com.contract.pojo.req.AddUserPurchaseRecordReq;
import com.contract.pojo.req.GetUserPurchaseRecordListReq;
import com.contract.pojo.req.UpdateUserPurchaseRecordByIdReq;
import com.github.pagehelper.PageInfo;

public interface UserPurchaseRecordService {

    boolean addUserPurchaseRecord(AddUserPurchaseRecordReq req);

    boolean deleteUserPurchaseRecordById(Integer id);

    boolean updateUserPurchaseRecordById(Integer id, UpdateUserPurchaseRecordByIdReq req);

    UserPurchaseRecord getUserPurchaseRecordById(Integer id);

    PageInfo<UserPurchaseRecord> getUserPurchaseRecordList(GetUserPurchaseRecordListReq req);

}
