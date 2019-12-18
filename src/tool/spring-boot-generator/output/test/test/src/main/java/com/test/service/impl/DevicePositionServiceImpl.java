package com.undefined.service.impl;

import com.undefined.mapper.DevicePositionMapper;
import com.undefined.pojo.entity.DevicePosition;
import com.spider.service.DevicePositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DevicePositionServiceImpl implements DevicePositionService {

    @Autowired
    private DevicePositionMapper devicePositionMapper;

    @Override
    public boolean addDevicePosition(AddDevicePositionReq req) {
        return devicePositionMapper.addDevicePosition(req) > 0;
    }


    @Override
    public boolean deleteDevicePositionById(Integer id) {
        return devicePositionMapper.deleteDevicePositionById(id) > 0;
    }


    @Override
    public boolean updateDevicePositionById(Integer id, UpdateDevicePositionByIdReq req) {
        return devicePositionMapper.updateDevicePositionById(id, req) > 0;
    }


    @Override
    public DevicePosition getDevicePositionById(Integer id) {
        return devicePositionMapper.getDevicePositionById(id);
    }


    @Override
    public PageInfo<DevicePosition> getDevicePositionList(GetDevicePositionListReq req) {
        return devicePositionMapper.getDevicePositionList(req);
    }
}
