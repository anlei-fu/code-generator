package com.undefined.service.impl;

import com.undefined.mapper.TunnelInfoMapper;
import com.undefined.pojo.entity.TunnelInfo;
import com.spider.service.TunnelInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TunnelInfoServiceImpl implements TunnelInfoService {

    @Autowired
    private TunnelInfoMapper tunnelInfoMapper;

    @Override
    public boolean addTunnelInfo(AddTunnelInfoReq req) {
        return tunnelInfoMapper.addTunnelInfo(req) > 0;
    }


    @Override
    public boolean deleteTunnelInfoById(Integer id) {
        return tunnelInfoMapper.deleteTunnelInfoById(id) > 0;
    }


    @Override
    public boolean updateTunnelInfoById(Integer id, UpdateTunnelInfoByIdReq req) {
        return tunnelInfoMapper.updateTunnelInfoById(id, req) > 0;
    }


    @Override
    public TunnelInfo getTunnelInfoById(Integer id) {
        return tunnelInfoMapper.getTunnelInfoById(id);
    }


    @Override
    public PageInfo<TunnelInfo> getTunnelInfoList(GetTunnelInfoListReq req) {
        return tunnelInfoMapper.getTunnelInfoList(req);
    }
}
