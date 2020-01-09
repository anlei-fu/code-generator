package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DeviceDamageMapMapper;
import com.railway.pojo.entity.DeviceDamageMap;
import com.railway.pojo.entity.DeviceDamageMap;
import com.railway.pojo.param.UpdateDeviceDamageMapByIdParams;
import com.railway.pojo.req.AddDeviceDamageMapReq;
import com.railway.pojo.req.GetDeviceDamageMapListReq;
import com.railway.pojo.req.UpdateDeviceDamageMapByIdReq;
import com.railway.service.DeviceDamageMapService;
import com.railway.utils.PageHelperUtils;
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
        UpdateDeviceDamageMapByIdParams params = new UpdateDeviceDamageMapByIdParams(id, req);
        return deviceDamageMapMapper.updateDeviceDamageMapById(params) > 0;
    }

    @Override
    public DeviceDamageMap getDeviceDamageMapById(Integer id) {
        return deviceDamageMapMapper.getDeviceDamageMapById(id);
    }

    @Override
    public PageInfo<DeviceDamageMap> getDeviceDamageMapList(GetDeviceDamageMapListReq req) {
        return PageHelperUtils.paging(req, () -> deviceDamageMapMapper.getDeviceDamageMapList(req));
    }

}

