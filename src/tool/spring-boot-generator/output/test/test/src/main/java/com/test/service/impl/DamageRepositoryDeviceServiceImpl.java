package com.undefined.service.impl;

import com.undefined.mapper.DamageRepositoryDeviceMapper;
import com.undefined.pojo.entity.DamageRepositoryDevice;
import com.spider.service.DamageRepositoryDeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DamageRepositoryDeviceServiceImpl implements DamageRepositoryDeviceService {

    @Autowired
    private DamageRepositoryDeviceMapper damageRepositoryDeviceMapper;

    @Override
    public boolean addDamageRepositoryDevice(AddDamageRepositoryDeviceReq req) {
        return damageRepositoryDeviceMapper.addDamageRepositoryDevice(req) > 0;
    }


    @Override
    public boolean deleteDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId) {
        return damageRepositoryDeviceMapper.deleteDamageRepositoryDeviceByOrderDetailId(orderDetailId) > 0;
    }


    @Override
    public boolean updateDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId, UpdateDamageRepositoryDeviceByOrderDetailIdReq req) {
        return damageRepositoryDeviceMapper.updateDamageRepositoryDeviceByOrderDetailId(orderDetailId, req) > 0;
    }


    @Override
    public DamageRepositoryDevice getDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId) {
        return damageRepositoryDeviceMapper.getDamageRepositoryDeviceByOrderDetailId(orderDetailId);
    }


    @Override
    public PageInfo<DamageRepositoryDevice> getDamageRepositoryDeviceList(GetDamageRepositoryDeviceListReq req) {
        return damageRepositoryDeviceMapper.getDamageRepositoryDeviceList(req);
    }
}
