package com.test.service.impl;

import com.test.pojo.req.AddDevicePositionReq;
import com.test.pojo.req.GetDevicePositionListReq;
import com.test.pojo.req.UpdateDevicePositionByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.DevicePositionMapper;
import com.test.pojo.entity.DevicePosition;
import com.test.service.DevicePositionService;
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
