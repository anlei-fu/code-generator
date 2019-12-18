package com.undefined.service;

import com.undefined.pojo.entity.DamageRepositoryDevice;

public interface DamageRepositoryDeviceService {

    boolean addDamageRepositoryDevice(AddDamageRepositoryDeviceReq req);

    boolean deleteDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId);

    boolean updateDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId, UpdateDamageRepositoryDeviceByOrderDetailIdReq req);

    DamageRepositoryDevice getDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId);

    PageInfo<DamageRepositoryDevice> getDamageRepositoryDeviceList(GetDamageRepositoryDeviceListReq req);
}