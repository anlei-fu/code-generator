package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DamageOrderMapper;
import com.railway.pojo.entity.DamageOrder;
import com.railway.pojo.entity.DamageOrder;
import com.railway.pojo.param.UpdateDamageOrderByOrderNoParams;
import com.railway.pojo.req.AddDamageOrderReq;
import com.railway.pojo.req.GetDamageOrderListReq;
import com.railway.pojo.req.UpdateDamageOrderByOrderNoReq;
import com.railway.service.DamageOrderService;
import com.railway.utils.PageHelperUtils;
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
    public boolean deleteDamageOrderByOrderNo(String orderNo) {
        return damageOrderMapper.deleteDamageOrderByOrderNo(orderNo) > 0;
    }

    @Override
    public boolean updateDamageOrderByOrderNo(String orderNo, UpdateDamageOrderByOrderNoReq req) {
        UpdateDamageOrderByOrderNoParams params = new UpdateDamageOrderByOrderNoParams(orderNo, req);
        return damageOrderMapper.updateDamageOrderByOrderNo(params) > 0;
    }

    @Override
    public DamageOrder getDamageOrderByOrderNo(String orderNo) {
        return damageOrderMapper.getDamageOrderByOrderNo(orderNo);
    }

    @Override
    public PageInfo<DamageOrder> getDamageOrderList(GetDamageOrderListReq req) {
        return PageHelperUtils.paging(req, () -> damageOrderMapper.getDamageOrderList(req));
    }

}

