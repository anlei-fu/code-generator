package com.undefined.service;

import com.undefined.pojo.entity.DamageOrder;

public interface DamageOrderService {

    boolean addDamageOrder(AddDamageOrderReq req);

    boolean deleteDamageOrderByOrderNo(Integer orderNo);

    boolean updateDamageOrderByOrderNo(Integer orderNo, UpdateDamageOrderByOrderNoReq req);

    DamageOrder getDamageOrderByOrderNo(Integer orderNo);

    PageInfo<DamageOrder> getDamageOrderList(GetDamageOrderListReq req);
}