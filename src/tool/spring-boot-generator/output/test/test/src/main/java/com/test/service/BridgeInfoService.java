package com.test.service;

import com.test.pojo.entity.BridgeInfo;
import com.test.pojo.req.AddBridgeInfoReq;
import com.test.pojo.req.GetBridgeInfoListReq;
import com.test.pojo.req.UpdateBridgeInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface BridgeInfoService {

    boolean addBridgeInfo(AddBridgeInfoReq req);

    boolean deleteBridgeInfoById(Integer id);

    boolean updateBridgeInfoById(Integer id, UpdateBridgeInfoByIdReq req);

    BridgeInfo getBridgeInfoById(Integer id);

    PageInfo<BridgeInfo> getBridgeInfoList(GetBridgeInfoListReq req);
}