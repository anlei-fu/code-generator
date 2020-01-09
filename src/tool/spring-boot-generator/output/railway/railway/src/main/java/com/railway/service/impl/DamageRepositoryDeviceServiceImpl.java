package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DamageRepositoryDeviceMapper;
import com.railway.pojo.entity.DamageRepositoryDevice;
import com.railway.pojo.entity.DamageRepository;
import com.railway.pojo.entity.DamageRepositoryDevice;
import com.railway.pojo.param.UpdateDamageRepositoryDeviceByOrderDetailIdParams;
import com.railway.pojo.req.AddDamageRepositoryDeviceReq;
import com.railway.pojo.req.GetDamageRepositoryDeviceListReq;
import com.railway.pojo.req.UpdateDamageRepositoryDeviceByOrderDetailIdReq;
import com.railway.service.DamageRepositoryDeviceService;
import com.railway.utils.PageHelperUtils;
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
        UpdateDamageRepositoryDeviceByOrderDetailIdParams params = new UpdateDamageRepositoryDeviceByOrderDetailIdParams(orderDetailId, req);
        return damageRepositoryDeviceMapper.updateDamageRepositoryDeviceByOrderDetailId(params) > 0;
    }

    @Override
    public DamageRepositoryDevice getDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId) {
        return damageRepositoryDeviceMapper.getDamageRepositoryDeviceByOrderDetailId(orderDetailId);
    }

    @Override
    public PageInfo<DamageRepositoryDevice> getDamageRepositoryDeviceList(GetDamageRepositoryDeviceListReq req) {
        return PageHelperUtils.paging(req, () -> damageRepositoryDeviceMapper.getDamageRepositoryDeviceList(req));
    }

}

