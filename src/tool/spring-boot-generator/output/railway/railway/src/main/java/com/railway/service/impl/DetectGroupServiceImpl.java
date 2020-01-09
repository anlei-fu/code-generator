package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DetectGroupMapper;
import com.railway.pojo.entity.DetectGroup;
import com.railway.pojo.entity.DetectGroup;
import com.railway.pojo.param.UpdateDetectGroupByIdParams;
import com.railway.pojo.req.AddDetectGroupReq;
import com.railway.pojo.req.GetDetectGroupListReq;
import com.railway.pojo.req.UpdateDetectGroupByIdReq;
import com.railway.service.DetectGroupService;
import com.railway.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetectGroupServiceImpl implements DetectGroupService {

    @Autowired
    private DetectGroupMapper detectGroupMapper;

    @Override
    public boolean addDetectGroup(AddDetectGroupReq req) {
        return detectGroupMapper.addDetectGroup(req) > 0;
    }

    @Override
    public boolean deleteDetectGroupById(Integer id) {
        return detectGroupMapper.deleteDetectGroupById(id) > 0;
    }

    @Override
    public boolean updateDetectGroupById(Integer id, UpdateDetectGroupByIdReq req) {
        UpdateDetectGroupByIdParams params = new UpdateDetectGroupByIdParams(id, req);
        return detectGroupMapper.updateDetectGroupById(params) > 0;
    }

    @Override
    public DetectGroup getDetectGroupById(Integer id) {
        return detectGroupMapper.getDetectGroupById(id);
    }

    @Override
    public PageInfo<DetectGroup> getDetectGroupList(GetDetectGroupListReq req) {
        return PageHelperUtils.paging(req, () -> detectGroupMapper.getDetectGroupList(req));
    }

}

