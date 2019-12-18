package com.undefined.service;

import com.undefined.pojo.entity.BureauLineOrder;

public interface BureauLineOrderService {

    boolean addBureauLineOrder(AddBureauLineOrderReq req);

    boolean deleteBureauLineOrderById(Integer id);

    boolean updateBureauLineOrderById(Integer id, UpdateBureauLineOrderByIdReq req);

    BureauLineOrder getBureauLineOrderById(Integer id);

    PageInfo<BureauLineOrder> getBureauLineOrderList(GetBureauLineOrderListReq req);
}