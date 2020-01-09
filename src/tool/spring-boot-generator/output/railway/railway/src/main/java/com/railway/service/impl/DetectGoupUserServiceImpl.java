package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DetectGoupUserMapper;
import com.railway.pojo.entity.DetectGoupUser;
import com.railway.pojo.entity.DetectGoupUser;
import com.railway.pojo.param.UpdateDetectGoupUserByIdParams;
import com.railway.pojo.req.AddDetectGoupUserReq;
import com.railway.pojo.req.GetDetectGoupUserListReq;
import com.railway.pojo.req.UpdateDetectGoupUserByIdReq;
import com.railway.service.DetectGoupUserService;
import com.railway.utils.PageHelperUtils;
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
        UpdateDetectGoupUserByIdParams params = new UpdateDetectGoupUserByIdParams(id, req);
        return detectGoupUserMapper.updateDetectGoupUserById(params) > 0;
    }

    @Override
    public DetectGoupUser getDetectGoupUserById(Integer id) {
        return detectGoupUserMapper.getDetectGoupUserById(id);
    }

    @Override
    public PageInfo<DetectGoupUser> getDetectGoupUserList(GetDetectGoupUserListReq req) {
        return PageHelperUtils.paging(req, () -> detectGoupUserMapper.getDetectGoupUserList(req));
    }

}

