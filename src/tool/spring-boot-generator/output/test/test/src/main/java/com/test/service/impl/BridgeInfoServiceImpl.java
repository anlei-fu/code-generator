package com.undefined.service.impl;

import com.undefined.mapper.BridgeInfoMapper;
import com.undefined.pojo.entity.BridgeInfo;
import com.spider.service.BridgeInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BridgeInfoServiceImpl implements BridgeInfoService {

    @Autowired
    private BridgeInfoMapper bridgeInfoMapper;

    @Override
    public boolean addBridgeInfo(AddBridgeInfoReq req) {
        return bridgeInfoMapper.addBridgeInfo(req) > 0;
    }


    @Override
    public boolean deleteBridgeInfoById(Integer id) {
        return bridgeInfoMapper.deleteBridgeInfoById(id) > 0;
    }


    @Override
    public boolean updateBridgeInfoById(Integer id, UpdateBridgeInfoByIdReq req) {
        return bridgeInfoMapper.updateBridgeInfoById(id, req) > 0;
    }


    @Override
    public BridgeInfo getBridgeInfoById(Integer id) {
        return bridgeInfoMapper.getBridgeInfoById(id);
    }


    @Override
    public PageInfo<BridgeInfo> getBridgeInfoList(GetBridgeInfoListReq req) {
        return bridgeInfoMapper.getBridgeInfoList(req);
    }
}
