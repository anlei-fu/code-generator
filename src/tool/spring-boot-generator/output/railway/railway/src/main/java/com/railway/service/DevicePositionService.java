package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DevicePosition;
import com.railway.pojo.req.AddDevicePositionReq;
import com.railway.pojo.req.GetDevicePositionListReq;
import com.railway.pojo.req.UpdateDevicePositionByIdReq;

public interface DevicePositionService {

    boolean addDevicePosition(AddDevicePositionReq req);

    boolean deleteDevicePositionById(Integer id);

    boolean updateDevicePositionById(Integer id, UpdateDevicePositionByIdReq req);

    DevicePosition getDevicePositionById(Integer id);

    PageInfo<DevicePosition> getDevicePositionList(GetDevicePositionListReq req);

}
