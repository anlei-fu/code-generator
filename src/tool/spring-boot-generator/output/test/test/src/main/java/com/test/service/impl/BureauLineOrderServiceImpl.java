package com.undefined.service.impl;

import com.undefined.mapper.BureauLineOrderMapper;
import com.undefined.pojo.entity.BureauLineOrder;
import com.spider.service.BureauLineOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BureauLineOrderServiceImpl implements BureauLineOrderService {

    @Autowired
    private BureauLineOrderMapper bureauLineOrderMapper;

    @Override
    public boolean addBureauLineOrder(AddBureauLineOrderReq req) {
        return bureauLineOrderMapper.addBureauLineOrder(req) > 0;
    }


    @Override
    public boolean deleteBureauLineOrderById(Integer id) {
        return bureauLineOrderMapper.deleteBureauLineOrderById(id) > 0;
    }


    @Override
    public boolean updateBureauLineOrderById(Integer id, UpdateBureauLineOrderByIdReq req) {
        return bureauLineOrderMapper.updateBureauLineOrderById(id, req) > 0;
    }


    @Override
    public BureauLineOrder getBureauLineOrderById(Integer id) {
        return bureauLineOrderMapper.getBureauLineOrderById(id);
    }


    @Override
    public PageInfo<BureauLineOrder> getBureauLineOrderList(GetBureauLineOrderListReq req) {
        return bureauLineOrderMapper.getBureauLineOrderList(req);
    }
}
