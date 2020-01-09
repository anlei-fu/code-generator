package com.contract.service;

import com.contract.pojo.entity.UserConsumeRecord;
import com.contract.pojo.req.AddUserConsumeRecordReq;
import com.contract.pojo.req.GetUserConsumeRecordListReq;
import com.contract.pojo.req.UpdateUserConsumeRecordByIdReq;
import com.github.pagehelper.PageInfo;

public interface UserConsumeRecordService {

    boolean addUserConsumeRecord(AddUserConsumeRecordReq req);

    boolean deleteUserConsumeRecordById(Integer id);

    boolean updateUserConsumeRecordById(Integer id, UpdateUserConsumeRecordByIdReq req);

    UserConsumeRecord getUserConsumeRecordById(Integer id);

    PageInfo<UserConsumeRecord> getUserConsumeRecordList(GetUserConsumeRecordListReq req);

}
