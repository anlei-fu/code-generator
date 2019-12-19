package com.test.service.impl;

import com.test.pojo.req.AddDetectGroupReq;
import com.test.pojo.req.GetDetectGroupListReq;
import com.test.pojo.req.UpdateDetectGroupByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.DetectGroupMapper;
import com.test.pojo.entity.DetectGroup;
import com.test.service.DetectGroupService;
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
        return detectGroupMapper.updateDetectGroupById(id, req) > 0;
    }


    @Override
    public DetectGroup getDetectGroupById(Integer id) {
        return detectGroupMapper.getDetectGroupById(id);
    }


    @Override
    public PageInfo<DetectGroup> getDetectGroupList(GetDetectGroupListReq req) {
        return detectGroupMapper.getDetectGroupList(req);
    }
}
