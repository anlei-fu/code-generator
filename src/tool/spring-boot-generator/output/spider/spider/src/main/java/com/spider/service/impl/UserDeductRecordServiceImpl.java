package com.undefined.service.impl;

import com.undefined.mapper.UserDeductRecordMapper;
import com.undefined.pojo.entity.UserDeductRecord;
import com.spider.service.UserDeductRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDeductRecordServiceImpl implements UserDeductRecordService {

    @Autowired
    private UserDeductRecordMapper userDeductRecordMapper;

    @Override
    public boolean addUserDeductRecord(AddUserDeductRecordReq req) {
        return userDeductRecordMapper.addUserDeductRecord(req) > 0;
    }


    @Override
    public boolean deleteUserDeductRecordById(Integer id) {
        return userDeductRecordMapper.deleteUserDeductRecordById(id) > 0;
    }


    @Override
    public boolean updateUserDeductRecordById(Integer id, UpdateUserDeductRecordByIdReq req) {
        return userDeductRecordMapper.updateUserDeductRecordById(id, req) > 0;
    }


    @Override
    public UserDeductRecord getUserDeductRecordById(Integer id) {
        return userDeductRecordMapper.getUserDeductRecordById(id);
    }


    @Override
    public PageInfo<UserDeductRecord> getUserDeductRecordList(GetUserDeductRecordListReq req) {
        return userDeductRecordMapper.getUserDeductRecordList(req);
    }
}
