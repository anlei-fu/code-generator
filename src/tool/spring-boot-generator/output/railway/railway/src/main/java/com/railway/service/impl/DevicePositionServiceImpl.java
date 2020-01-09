package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DevicePositionMapper;
import com.railway.pojo.entity.DevicePosition;
import com.railway.pojo.entity.DevicePosition;
import com.railway.pojo.param.UpdateDevicePositionByIdParams;
import com.railway.pojo.req.AddDevicePositionReq;
import com.railway.pojo.req.GetDevicePositionListReq;
import com.railway.pojo.req.UpdateDevicePositionByIdReq;
import com.railway.service.DevicePositionService;
import com.railway.utils.PageHelperUtils;
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
        UpdateDevicePositionByIdParams params = new UpdateDevicePositionByIdParams(id, req);
        return devicePositionMapper.updateDevicePositionById(params) > 0;
    }

    @Override
    public DevicePosition getDevicePositionById(Integer id) {
        return devicePositionMapper.getDevicePositionById(id);
    }

    @Override
    public PageInfo<DevicePosition> getDevicePositionList(GetDevicePositionListReq req) {
        return PageHelperUtils.paging(req, () -> devicePositionMapper.getDevicePositionList(req));
    }

}

