package com.test.service.impl;

import com.test.pojo.req.AddBureauLineOrderReq;
import com.test.pojo.req.GetBureauLineOrderListReq;
import com.test.pojo.req.UpdateBureauLineOrderByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.BureauLineOrderMapper;
import com.test.pojo.entity.BureauLineOrder;
import com.test.service.BureauLineOrderService;
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
