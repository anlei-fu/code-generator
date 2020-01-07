package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.UserChargeRecord;
import com.spider.pojo.req.AddUserChargeRecordReq;
import com.spider.pojo.req.GetUserChargeRecordListReq;
import com.spider.pojo.req.UpdateUserChargeRecordByIdReq;


public interface UserChargeRecordService {

    boolean addUserChargeRecord(AddUserChargeRecordReq req);
    
    boolean deleteUserChargeRecordById(Integer id);
    
    boolean updateUserChargeRecordById(Integer id, UpdateUserChargeRecordByIdReq req);
    
    UserChargeRecord getUserChargeRecordById(Integer id);
    
    PageInfo<UserChargeRecord> getUserChargeRecordList(GetUserChargeRecordListReq req);

}