package com.contract.service.impl;

import com.contract.mapper.UserConsumeRecordMapper;
import com.contract.pojo.entity.UserConsumeRecord;
import com.contract.pojo.entity.UserConsumeRecord;
import com.contract.pojo.param.UpdateUserConsumeRecordByIdParams;
import com.contract.pojo.req.AddUserConsumeRecordReq;
import com.contract.pojo.req.GetUserConsumeRecordListReq;
import com.contract.pojo.req.UpdateUserConsumeRecordByIdReq;
import com.contract.service.UserConsumeRecordService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserConsumeRecordServiceImpl implements UserConsumeRecordService {

    @Autowired
    private UserConsumeRecordMapper userConsumeRecordMapper;

    @Override
    public boolean addUserConsumeRecord(AddUserConsumeRecordReq req) {
        return userConsumeRecordMapper.addUserConsumeRecord(req) > 0;
    }

    @Override
    public boolean deleteUserConsumeRecordById(Integer id) {
        return userConsumeRecordMapper.deleteUserConsumeRecordById(id) > 0;
    }

    @Override
    public boolean updateUserConsumeRecordById(Integer id, UpdateUserConsumeRecordByIdReq req) {
        UpdateUserConsumeRecordByIdParams params = new UpdateUserConsumeRecordByIdParams(id, req);
        return userConsumeRecordMapper.updateUserConsumeRecordById(params) > 0;
    }

    @Override
    public UserConsumeRecord getUserConsumeRecordById(Integer id) {
        return userConsumeRecordMapper.getUserConsumeRecordById(id);
    }

    @Override
    public PageInfo<UserConsumeRecord> getUserConsumeRecordList(GetUserConsumeRecordListReq req) {
        return PageHelperUtils.paging(req, () -> userConsumeRecordMapper.getUserConsumeRecordList(req));
    }

}

