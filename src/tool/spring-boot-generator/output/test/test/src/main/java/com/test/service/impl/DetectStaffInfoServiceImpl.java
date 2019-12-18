package com.undefined.service.impl;

import com.undefined.mapper.DetectStaffInfoMapper;
import com.undefined.pojo.entity.DetectStaffInfo;
import com.spider.service.DetectStaffInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetectStaffInfoServiceImpl implements DetectStaffInfoService {

    @Autowired
    private DetectStaffInfoMapper detectStaffInfoMapper;

    @Override
    public boolean addDetectStaffInfo(AddDetectStaffInfoReq req) {
        return detectStaffInfoMapper.addDetectStaffInfo(req) > 0;
    }


    @Override
    public boolean deleteDetectStaffInfoById(Integer id) {
        return detectStaffInfoMapper.deleteDetectStaffInfoById(id) > 0;
    }


    @Override
    public boolean updateDetectStaffInfoById(Integer id, UpdateDetectStaffInfoByIdReq req) {
        return detectStaffInfoMapper.updateDetectStaffInfoById(id, req) > 0;
    }


    @Override
    public DetectStaffInfo getDetectStaffInfoById(Integer id) {
        return detectStaffInfoMapper.getDetectStaffInfoById(id);
    }


    @Override
    public PageInfo<DetectStaffInfo> getDetectStaffInfoList(GetDetectStaffInfoListReq req) {
        return detectStaffInfoMapper.getDetectStaffInfoList(req);
    }
}
