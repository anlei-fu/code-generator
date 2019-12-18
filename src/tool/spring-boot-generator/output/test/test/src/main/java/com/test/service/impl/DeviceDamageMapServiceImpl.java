package com.undefined.service.impl;

import com.undefined.mapper.DeviceDamageMapMapper;
import com.undefined.pojo.entity.DeviceDamageMap;
import com.spider.service.DeviceDamageMapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeviceDamageMapServiceImpl implements DeviceDamageMapService {

    @Autowired
    private DeviceDamageMapMapper deviceDamageMapMapper;

    @Override
    public boolean addDeviceDamageMap(AddDeviceDamageMapReq req) {
        return deviceDamageMapMapper.addDeviceDamageMap(req) > 0;
    }


    @Override
    public boolean deleteDeviceDamageMapById(Integer id) {
        return deviceDamageMapMapper.deleteDeviceDamageMapById(id) > 0;
    }


    @Override
    public boolean updateDeviceDamageMapById(Integer id, UpdateDeviceDamageMapByIdReq req) {
        return deviceDamageMapMapper.updateDeviceDamageMapById(id, req) > 0;
    }


    @Override
    public DeviceDamageMap getDeviceDamageMapById(Integer id) {
        return deviceDamageMapMapper.getDeviceDamageMapById(id);
    }


    @Override
    public PageInfo<DeviceDamageMap> getDeviceDamageMapList(GetDeviceDamageMapListReq req) {
        return deviceDamageMapMapper.getDeviceDamageMapList(req);
    }
}
