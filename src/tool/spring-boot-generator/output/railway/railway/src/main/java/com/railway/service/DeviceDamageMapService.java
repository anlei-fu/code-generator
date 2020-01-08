package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DeviceDamageMap;
import com.railway.pojo.req.AddDeviceDamageMapReq;
import com.railway.pojo.req.GetDeviceDamageMapListReq;
import com.railway.pojo.req.UpdateDeviceDamageMapByIdReq;


public interface DeviceDamageMapService {

    boolean addDeviceDamageMap(AddDeviceDamageMapReq req);
    
    boolean deleteDeviceDamageMapById(Integer id);
    
    boolean updateDeviceDamageMapById(Integer id, UpdateDeviceDamageMapByIdReq req);
    
    DeviceDamageMap getDeviceDamageMapById(Integer id);
    
    PageInfo<DeviceDamageMap> getDeviceDamageMapList(GetDeviceDamageMapListReq req);

}