package com.test.service.impl;

import com.test.pojo.req.AddDetectDeviceInfoReq;
import com.test.pojo.req.GetDetectDeviceInfoListReq;
import com.test.pojo.req.UpdateDetectDeviceInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.DetectDeviceInfoMapper;
import com.test.pojo.entity.DetectDeviceInfo;
import com.test.service.DetectDeviceInfoService;
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
