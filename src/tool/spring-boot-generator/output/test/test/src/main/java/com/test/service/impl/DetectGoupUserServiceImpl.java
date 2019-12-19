package com.test.service.impl;

import com.test.pojo.req.AddDetectGoupUserReq;
import com.test.pojo.req.GetDetectGoupUserListReq;
import com.test.pojo.req.UpdateDetectGoupUserByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.DetectGoupUserMapper;
import com.test.pojo.entity.DetectGoupUser;
import com.test.service.DetectGoupUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DetectGoupUserServiceImpl implements DetectGoupUserService {

    @Autowired
    private DetectGoupUserMapper detectGoupUserMapper;

    @Override
    public boolean addDetectGoupUser(AddDetectGoupUserReq req) {
        return detectGoupUserMapper.addDetectGoupUser(req) > 0;
    }


    @Override
    public boolean deleteDetectGoupUserById(Integer id) {
        return detectGoupUserMapper.deleteDetectGoupUserById(id) > 0;
    }


    @Override
    public boolean updateDetectGoupUserById(Integer id, UpdateDetectGoupUserByIdReq req) {
        return detectGoupUserMapper.updateDetectGoupUserById(id, req) > 0;
    }


    @Override
    public DetectGoupUser getDetectGoupUserById(Integer id) {
        return detectGoupUserMapper.getDetectGoupUserById(id);
    }


    @Override
    public PageInfo<DetectGoupUser> getDetectGoupUserList(GetDetectGoupUserListReq req) {
        return detectGoupUserMapper.getDetectGoupUserList(req);
    }
}
