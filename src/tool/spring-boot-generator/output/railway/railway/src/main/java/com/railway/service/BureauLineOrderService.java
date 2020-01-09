package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.BureauLineOrder;
import com.railway.pojo.req.AddBureauLineOrderReq;
import com.railway.pojo.req.GetBureauLineOrderListReq;
import com.railway.pojo.req.UpdateBureauLineOrderByIdReq;

public interface BureauLineOrderService {

    boolean addBureauLineOrder(AddBureauLineOrderReq req);

    boolean deleteBureauLineOrderById(Integer id);

    boolean updateBureauLineOrderById(Integer id, UpdateBureauLineOrderByIdReq req);

    BureauLineOrder getBureauLineOrderById(Integer id);

    PageInfo<BureauLineOrder> getBureauLineOrderList(GetBureauLineOrderListReq req);

}
