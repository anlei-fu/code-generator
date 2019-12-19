package com.test.service.impl;

import com.test.pojo.req.AddDetectStaffInfoCopyReq;
import com.test.pojo.req.GetDetectStaffInfoCopyListReq;
import com.test.pojo.req.UpdateDetectStaffInfoCopyByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.DetectStaffInfoCopyMapper;
import com.test.pojo.entity.DetectStaffInfoCopy;
import com.test.service.DetectStaffInfoCopyService;
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
