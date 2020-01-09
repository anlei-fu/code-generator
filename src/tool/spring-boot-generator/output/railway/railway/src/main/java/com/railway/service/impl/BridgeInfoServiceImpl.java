package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.BridgeInfoMapper;
import com.railway.pojo.entity.BridgeInfo;
import com.railway.pojo.entity.BridgeInfo;
import com.railway.pojo.param.UpdateBridgeInfoByIdParams;
import com.railway.pojo.req.AddBridgeInfoReq;
import com.railway.pojo.req.GetBridgeInfoListReq;
import com.railway.pojo.req.UpdateBridgeInfoByIdReq;
import com.railway.service.BridgeInfoService;
import com.railway.utils.PageHelperUtils;
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
        UpdateBridgeInfoByIdParams params = new UpdateBridgeInfoByIdParams(id, req);
        return bridgeInfoMapper.updateBridgeInfoById(params) > 0;
    }

    @Override
    public BridgeInfo getBridgeInfoById(Integer id) {
        return bridgeInfoMapper.getBridgeInfoById(id);
    }

    @Override
    public PageInfo<BridgeInfo> getBridgeInfoList(GetBridgeInfoListReq req) {
        return PageHelperUtils.paging(req, () -> bridgeInfoMapper.getBridgeInfoList(req));
    }

}

