package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.BureauLineOrderMapper;
import com.railway.pojo.entity.BureauLineOrder;
import com.railway.pojo.entity.BureauLineOrder;
import com.railway.pojo.req.AddBureauLineOrderReq;
import com.railway.pojo.req.GetBureauLineOrderListReq;
import com.railway.pojo.req.UpdateBureauLineOrderByIdReq;
import com.railway.service.BureauLineOrderService;
import com.railway.utils.PageHelperUtils;
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
        params params = new UpdateBureauLineOrderByIdParams(id, req)
        return bureauLineOrderMapper.updateBureauLineOrderById(params) > 0;
    }

    @Override
    public BureauLineOrder getBureauLineOrderById(Integer id) {
        return bureauLineOrderMapper.getBureauLineOrderById(id);
    }

    @Override
    public PageInfo<BureauLineOrder> getBureauLineOrderList(GetBureauLineOrderListReq req) {
        return PageHelperUtils.page(()=> bureauLineOrderMapper.getBureauLineOrderList(req));
    }

}
