package com.test.service;

import com.test.pojo.entity.DamageRepository;
import com.test.pojo.entity.DamageRepositoryDevice;
import com.test.pojo.req.AddDamageRepositoryDeviceReq;
import com.test.pojo.req.GetDamageRepositoryDeviceListReq;
import com.test.pojo.req.UpdateDamageRepositoryDeviceByOrderDetailIdReq;
import com.github.pagehelper.PageInfo;


public interface DamageRepositoryDeviceService {

    boolean addDamageRepositoryDevice(AddDamageRepositoryDeviceReq req);

    boolean deleteDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId);

    boolean updateDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId, UpdateDamageRepositoryDeviceByOrderDetailIdReq req);

    DamageRepositoryDevice getDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId);

    PageInfo<DamageRepositoryDevice> getDamageRepositoryDeviceList(GetDamageRepositoryDeviceListReq req);
}