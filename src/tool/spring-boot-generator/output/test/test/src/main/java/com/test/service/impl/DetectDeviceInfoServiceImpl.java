package com.undefined.service.impl;

import com.undefined.mapper.DetectDeviceInfoMapper;
import com.undefined.pojo.entity.DetectDeviceInfo;
import com.spider.service.DetectDeviceInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetectDeviceInfoServiceImpl implements DetectDeviceInfoService {

    @Autowired
    private DetectDeviceInfoMapper detectDeviceInfoMapper;

    @Override
    public boolean addDetectDeviceInfo(AddDetectDeviceInfoReq req) {
        return detectDeviceInfoMapper.addDetectDeviceInfo(req) > 0;
    }


    @Override
    public boolean deleteDetectDeviceInfoById(Integer id) {
        return detectDeviceInfoMapper.deleteDetectDeviceInfoById(id) > 0;
    }


    @Override
    public boolean updateDetectDeviceInfoById(Integer id, UpdateDetectDeviceInfoByIdReq req) {
        return detectDeviceInfoMapper.updateDetectDeviceInfoById(id, req) > 0;
    }


    @Override
    public DetectDeviceInfo getDetectDeviceInfoById(Integer id) {
        return detectDeviceInfoMapper.getDetectDeviceInfoById(id);
    }


    @Override
    public PageInfo<DetectDeviceInfo> getDetectDeviceInfoList(GetDetectDeviceInfoListReq req) {
        return detectDeviceInfoMapper.getDetectDeviceInfoList(req);
    }
}
