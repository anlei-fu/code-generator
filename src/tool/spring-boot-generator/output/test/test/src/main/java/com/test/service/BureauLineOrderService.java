package com.test.service;

import com.test.pojo.entity.BureauLineOrder;
import com.test.pojo.req.AddBureauLineOrderReq;
import com.test.pojo.req.GetBureauLineOrderListReq;
import com.test.pojo.req.UpdateBureauLineOrderByIdReq;
import com.github.pagehelper.PageInfo;


public interface BureauLineOrderService {

    boolean addBureauLineOrder(AddBureauLineOrderReq req);

    boolean deleteBureauLineOrderById(Integer id);

    boolean updateBureauLineOrderById(Integer id, UpdateBureauLineOrderByIdReq req);

    BureauLineOrder getBureauLineOrderById(Integer id);

    PageInfo<BureauLineOrder> getBureauLineOrderList(GetBureauLineOrderListReq req);
}