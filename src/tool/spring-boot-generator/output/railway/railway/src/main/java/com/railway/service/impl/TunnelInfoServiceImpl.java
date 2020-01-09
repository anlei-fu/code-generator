package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.TunnelInfoMapper;
import com.railway.pojo.entity.TunnelInfo;
import com.railway.pojo.entity.TunnelInfo;
import com.railway.pojo.param.UpdateTunnelInfoByIdParams;
import com.railway.pojo.req.AddTunnelInfoReq;
import com.railway.pojo.req.GetTunnelInfoListReq;
import com.railway.pojo.req.UpdateTunnelInfoByIdReq;
import com.railway.service.TunnelInfoService;
import com.railway.utils.PageHelperUtils;
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
        UpdateTunnelInfoByIdParams params = new UpdateTunnelInfoByIdParams(id, req);
        return tunnelInfoMapper.updateTunnelInfoById(params) > 0;
    }

    @Override
    public TunnelInfo getTunnelInfoById(Integer id) {
        return tunnelInfoMapper.getTunnelInfoById(id);
    }

    @Override
    public PageInfo<TunnelInfo> getTunnelInfoList(GetTunnelInfoListReq req) {
        return PageHelperUtils.paging(req, () -> tunnelInfoMapper.getTunnelInfoList(req));
    }

}

