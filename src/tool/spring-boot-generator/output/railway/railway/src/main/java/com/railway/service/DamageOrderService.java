package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DamageOrder;
import com.railway.pojo.req.AddDamageOrderReq;
import com.railway.pojo.req.GetDamageOrderListReq;
import com.railway.pojo.req.UpdateDamageOrderByOrderNoReq;

public interface DamageOrderService {

    boolean addDamageOrder(AddDamageOrderReq req);

    boolean deleteDamageOrderByOrderNo(String orderNo);

    boolean updateDamageOrderByOrderNo(String orderNo, UpdateDamageOrderByOrderNoReq req);

    DamageOrder getDamageOrderByOrderNo(String orderNo);

    PageInfo<DamageOrder> getDamageOrderList(GetDamageOrderListReq req);

}
