package com.undefined.service.impl;

import com.undefined.mapper.DetectStaffInfoCopyMapper;
import com.undefined.pojo.entity.DetectStaffInfoCopy;
import com.spider.service.DetectStaffInfoCopyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetectStaffInfoCopyServiceImpl implements DetectStaffInfoCopyService {

    @Autowired
    private DetectStaffInfoCopyMapper detectStaffInfoCopyMapper;

    @Override
    public boolean addDetectStaffInfoCopy(AddDetectStaffInfoCopyReq req) {
        return detectStaffInfoCopyMapper.addDetectStaffInfoCopy(req) > 0;
    }


    @Override
    public boolean deleteDetectStaffInfoCopyById(Integer id) {
        return detectStaffInfoCopyMapper.deleteDetectStaffInfoCopyById(id) > 0;
    }


    @Override
    public boolean updateDetectStaffInfoCopyById(Integer id, UpdateDetectStaffInfoCopyByIdReq req) {
        return detectStaffInfoCopyMapper.updateDetectStaffInfoCopyById(id, req) > 0;
    }


    @Override
    public DetectStaffInfoCopy getDetectStaffInfoCopyById(Integer id) {
        return detectStaffInfoCopyMapper.getDetectStaffInfoCopyById(id);
    }


    @Override
    public PageInfo<DetectStaffInfoCopy> getDetectStaffInfoCopyList(GetDetectStaffInfoCopyListReq req) {
        return detectStaffInfoCopyMapper.getDetectStaffInfoCopyList(req);
    }
}
