package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DamageRepository;
import com.railway.pojo.entity.DamageRepositoryDevice;
import com.railway.pojo.req.AddDamageRepositoryDeviceReq;
import com.railway.pojo.req.GetDamageRepositoryDeviceListReq;
import com.railway.pojo.req.UpdateDamageRepositoryDeviceByOrderDetailIdReq;

public interface DamageRepositoryDeviceService {

    boolean addDamageRepositoryDevice(AddDamageRepositoryDeviceReq req);

    boolean deleteDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId);

    boolean updateDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId, UpdateDamageRepositoryDeviceByOrderDetailIdReq req);

    DamageRepositoryDevice getDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId);

    PageInfo<DamageRepositoryDevice> getDamageRepositoryDeviceList(GetDamageRepositoryDeviceListReq req);

}
