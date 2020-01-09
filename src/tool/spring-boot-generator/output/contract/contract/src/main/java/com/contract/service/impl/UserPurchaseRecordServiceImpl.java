package com.contract.service.impl;

import com.contract.mapper.UserPurchaseRecordMapper;
import com.contract.pojo.entity.UserPurchaseRecord;
import com.contract.pojo.entity.UserPurchaseRecord;
import com.contract.pojo.param.UpdateUserPurchaseRecordByIdParams;
import com.contract.pojo.req.AddUserPurchaseRecordReq;
import com.contract.pojo.req.GetUserPurchaseRecordListReq;
import com.contract.pojo.req.UpdateUserPurchaseRecordByIdReq;
import com.contract.service.UserPurchaseRecordService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserPurchaseRecordServiceImpl implements UserPurchaseRecordService {

    @Autowired
    private UserPurchaseRecordMapper userPurchaseRecordMapper;

    @Override
    public boolean addUserPurchaseRecord(AddUserPurchaseRecordReq req) {
        return userPurchaseRecordMapper.addUserPurchaseRecord(req) > 0;
    }

    @Override
    public boolean deleteUserPurchaseRecordById(Integer id) {
        return userPurchaseRecordMapper.deleteUserPurchaseRecordById(id) > 0;
    }

    @Override
    public boolean updateUserPurchaseRecordById(Integer id, UpdateUserPurchaseRecordByIdReq req) {
        UpdateUserPurchaseRecordByIdParams params = new UpdateUserPurchaseRecordByIdParams(id, req);
        return userPurchaseRecordMapper.updateUserPurchaseRecordById(params) > 0;
    }

    @Override
    public UserPurchaseRecord getUserPurchaseRecordById(Integer id) {
        return userPurchaseRecordMapper.getUserPurchaseRecordById(id);
    }

    @Override
    public PageInfo<UserPurchaseRecord> getUserPurchaseRecordList(GetUserPurchaseRecordListReq req) {
        return PageHelperUtils.paging(req, () -> userPurchaseRecordMapper.getUserPurchaseRecordList(req));
    }

}

