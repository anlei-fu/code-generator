package com.test.service;

import com.test.pojo.entity.DevicePosition;
import com.test.pojo.req.AddDevicePositionReq;
import com.test.pojo.req.GetDevicePositionListReq;
import com.test.pojo.req.UpdateDevicePositionByIdReq;
import com.github.pagehelper.PageInfo;


public interface DevicePositionService {

    boolean addDevicePosition(AddDevicePositionReq req);

    boolean deleteDevicePositionById(Integer id);

    boolean updateDevicePositionById(Integer id, UpdateDevicePositionByIdReq req);

    DevicePosition getDevicePositionById(Integer id);

    PageInfo<DevicePosition> getDevicePositionList(GetDevicePositionListReq req);
}