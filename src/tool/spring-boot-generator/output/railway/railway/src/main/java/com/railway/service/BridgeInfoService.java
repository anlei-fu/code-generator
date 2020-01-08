package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.BridgeInfo;
import com.railway.pojo.req.AddBridgeInfoReq;
import com.railway.pojo.req.GetBridgeInfoListReq;
import com.railway.pojo.req.UpdateBridgeInfoByIdReq;


public interface BridgeInfoService {

    boolean addBridgeInfo(AddBridgeInfoReq req);
    
    boolean deleteBridgeInfoById(Integer id);
    
    boolean updateBridgeInfoById(Integer id, UpdateBridgeInfoByIdReq req);
    
    BridgeInfo getBridgeInfoById(Integer id);
    
    PageInfo<BridgeInfo> getBridgeInfoList(GetBridgeInfoListReq req);

}