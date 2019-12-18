package com.undefined.service;

import com.undefined.pojo.entity.BridgeInfo;

public interface BridgeInfoService {

    boolean addBridgeInfo(AddBridgeInfoReq req);

    boolean deleteBridgeInfoById(Integer id);

    boolean updateBridgeInfoById(Integer id, UpdateBridgeInfoByIdReq req);

    BridgeInfo getBridgeInfoById(Integer id);

    PageInfo<BridgeInfo> getBridgeInfoList(GetBridgeInfoListReq req);
}