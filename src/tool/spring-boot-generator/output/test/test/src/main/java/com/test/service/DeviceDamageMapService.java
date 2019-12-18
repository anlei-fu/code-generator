package com.undefined.service;

import com.undefined.pojo.entity.DeviceDamageMap;

public interface DeviceDamageMapService {

    boolean addDeviceDamageMap(AddDeviceDamageMapReq req);

    boolean deleteDeviceDamageMapById(Integer id);

    boolean updateDeviceDamageMapById(Integer id, UpdateDeviceDamageMapByIdReq req);

    DeviceDamageMap getDeviceDamageMapById(Integer id);

    PageInfo<DeviceDamageMap> getDeviceDamageMapList(GetDeviceDamageMapListReq req);
}