package com.undefined.service;

import com.undefined.pojo.entity.UserChargeRecord;

public interface UserChargeRecordService {

    boolean addUserChargeRecord(AddUserChargeRecordReq req);

    boolean deleteUserChargeRecordById(Integer id);

    boolean updateUserChargeRecordById(Integer id, UpdateUserChargeRecordByIdReq req);

    UserChargeRecord getUserChargeRecordById(Integer id);

    PageInfo<UserChargeRecord> getUserChargeRecordList(GetUserChargeRecordListReq req);
}