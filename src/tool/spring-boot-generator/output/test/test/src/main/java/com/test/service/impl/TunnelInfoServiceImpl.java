package com.test.service.impl;

import com.test.pojo.req.AddTunnelInfoReq;
import com.test.pojo.req.GetTunnelInfoListReq;
import com.test.pojo.req.UpdateTunnelInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.TunnelInfoMapper;
import com.test.pojo.entity.TunnelInfo;
import com.test.service.TunnelInfoService;
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
