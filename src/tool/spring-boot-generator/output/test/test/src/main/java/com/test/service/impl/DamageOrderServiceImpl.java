package com.undefined.service.impl;

import com.undefined.mapper.DamageOrderMapper;
import com.undefined.pojo.entity.DamageOrder;
import com.spider.service.DamageOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DamageOrderServiceImpl implements DamageOrderService {

    @Autowired
    private DamageOrderMapper damageOrderMapper;

    @Override
    public boolean addDamageOrder(AddDamageOrderReq req) {
        return damageOrderMapper.addDamageOrder(req) > 0;
    }


    @Override
    public boolean deleteDamageOrderByOrderNo(Integer orderNo) {
        return damageOrderMapper.deleteDamageOrderByOrderNo(orderNo) > 0;
    }


    @Override
    public boolean updateDamageOrderByOrderNo(Integer orderNo, UpdateDamageOrderByOrderNoReq req) {
        return damageOrderMapper.updateDamageOrderByOrderNo(orderNo, req) > 0;
    }


    @Override
    public DamageOrder getDamageOrderByOrderNo(Integer orderNo) {
        return damageOrderMapper.getDamageOrderByOrderNo(orderNo);
    }


    @Override
    public PageInfo<DamageOrder> getDamageOrderList(GetDamageOrderListReq req) {
        return damageOrderMapper.getDamageOrderList(req);
    }
}
