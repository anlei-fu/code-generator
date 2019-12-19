package com.test.service;

import com.test.pojo.entity.DeviceDamageMap;
import com.test.pojo.req.AddDeviceDamageMapReq;
import com.test.pojo.req.GetDeviceDamageMapListReq;
import com.test.pojo.req.UpdateDeviceDamageMapByIdReq;
import com.github.pagehelper.PageInfo;


public interface DeviceDamageMapService {

    boolean addDeviceDamageMap(AddDeviceDamageMapReq req);

    boolean deleteDeviceDamageMapById(Integer id);

    boolean updateDeviceDamageMapById(Integer id, UpdateDeviceDamageMapByIdReq req);

    DeviceDamageMap getDeviceDamageMapById(Integer id);

    PageInfo<DeviceDamageMap> getDeviceDamageMapList(GetDeviceDamageMapListReq req);
}