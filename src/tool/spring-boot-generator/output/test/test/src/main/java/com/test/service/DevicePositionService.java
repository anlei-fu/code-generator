package com.undefined.service;

import com.undefined.pojo.entity.DevicePosition;

public interface DevicePositionService {

    boolean addDevicePosition(AddDevicePositionReq req);

    boolean deleteDevicePositionById(Integer id);

    boolean updateDevicePositionById(Integer id, UpdateDevicePositionByIdReq req);

    DevicePosition getDevicePositionById(Integer id);

    PageInfo<DevicePosition> getDevicePositionList(GetDevicePositionListReq req);
}