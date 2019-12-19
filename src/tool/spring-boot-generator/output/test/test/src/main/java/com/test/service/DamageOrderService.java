package com.test.service;

import com.test.pojo.entity.DamageOrder;
import com.test.pojo.req.AddDamageOrderReq;
import com.test.pojo.req.GetDamageOrderListReq;
import com.test.pojo.req.UpdateDamageOrderByOrderNoReq;
import com.github.pagehelper.PageInfo;


public interface DamageOrderService {

    boolean addDamageOrder(AddDamageOrderReq req);

    boolean deleteDamageOrderByOrderNo(Integer orderNo);

    boolean updateDamageOrderByOrderNo(Integer orderNo, UpdateDamageOrderByOrderNoReq req);

    DamageOrder getDamageOrderByOrderNo(Integer orderNo);

    PageInfo<DamageOrder> getDamageOrderList(GetDamageOrderListReq req);
}