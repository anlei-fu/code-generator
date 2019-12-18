package com.undefined.service;

import com.undefined.pojo.entity.UserDeductRecord;

public interface UserDeductRecordService {

    boolean addUserDeductRecord(AddUserDeductRecordReq req);

    boolean deleteUserDeductRecordById(Integer id);

    boolean updateUserDeductRecordById(Integer id, UpdateUserDeductRecordByIdReq req);

    UserDeductRecord getUserDeductRecordById(Integer id);

    PageInfo<UserDeductRecord> getUserDeductRecordList(GetUserDeductRecordListReq req);
}