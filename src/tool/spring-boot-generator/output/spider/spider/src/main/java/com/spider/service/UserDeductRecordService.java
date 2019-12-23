package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.UserDeductRecord;
import com.spider.pojo.req.AddUserDeductRecordReq;
import com.spider.pojo.req.GetUserDeductRecordListReq;
import com.spider.pojo.req.UpdateUserDeductRecordByIdReq;


public interface UserDeductRecordService {

    boolean addUserDeductRecord(AddUserDeductRecordReq req);
    
    boolean deleteUserDeductRecordById(Integer id);
    
    boolean updateUserDeductRecordById(Integer id, UpdateUserDeductRecordByIdReq req);
    
    UserDeductRecord getUserDeductRecordById(Integer id);
    
    PageInfo<UserDeductRecord> getUserDeductRecordList(GetUserDeductRecordListReq req);

}