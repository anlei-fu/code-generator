package com.undefined.service.impl;

import com.undefined.mapper.DetectGroupMapper;
import com.undefined.pojo.entity.DetectGroup;
import com.spider.service.DetectGroupService;
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
