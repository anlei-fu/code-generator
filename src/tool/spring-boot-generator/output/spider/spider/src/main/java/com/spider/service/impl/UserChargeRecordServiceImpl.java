package com.undefined.service.impl;

import com.undefined.mapper.UserChargeRecordMapper;
import com.undefined.pojo.entity.UserChargeRecord;
import com.spider.service.UserChargeRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserChargeRecordServiceImpl implements UserChargeRecordService {

    @Autowired
    private UserChargeRecordMapper userChargeRecordMapper;

    @Override
    public boolean addUserChargeRecord(AddUserChargeRecordReq req) {
        return userChargeRecordMapper.addUserChargeRecord(req) > 0;
    }


    @Override
    public boolean deleteUserChargeRecordById(Integer id) {
        return userChargeRecordMapper.deleteUserChargeRecordById(id) > 0;
    }


    @Override
    public boolean updateUserChargeRecordById(Integer id, UpdateUserChargeRecordByIdReq req) {
        return userChargeRecordMapper.updateUserChargeRecordById(id, req) > 0;
    }


    @Override
    public UserChargeRecord getUserChargeRecordById(Integer id) {
        return userChargeRecordMapper.getUserChargeRecordById(id);
    }


    @Override
    public PageInfo<UserChargeRecord> getUserChargeRecordList(GetUserChargeRecordListReq req) {
        return userChargeRecordMapper.getUserChargeRecordList(req);
    }
}
