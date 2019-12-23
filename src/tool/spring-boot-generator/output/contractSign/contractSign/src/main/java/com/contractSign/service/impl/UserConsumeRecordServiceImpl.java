package com.contractSign.service;



public interface @nameService {

    boolean addUserConsumeRecord(AddUserConsumeRecordReq req);
    boolean deleteUserConsumeRecordById(Integer id);
    boolean updateUserConsumeRecordById(Integer id, UpdateUserConsumeRecordByIdReq req);
    UserConsumeRecord getUserConsumeRecordById(Integer id);
    PageInfo<UserConsumeRecord> getUserConsumeRecordList(GetUserConsumeRecordListReq req);

}