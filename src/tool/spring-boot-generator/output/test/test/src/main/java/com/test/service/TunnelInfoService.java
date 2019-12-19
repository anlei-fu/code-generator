package com.test.service;

import com.test.pojo.entity.TunnelInfo;
import com.test.pojo.req.AddTunnelInfoReq;
import com.test.pojo.req.GetTunnelInfoListReq;
import com.test.pojo.req.UpdateTunnelInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface TunnelInfoService {

    boolean addTunnelInfo(AddTunnelInfoReq req);

    boolean deleteTunnelInfoById(Integer id);

    boolean updateTunnelInfoById(Integer id, UpdateTunnelInfoByIdReq req);

    TunnelInfo getTunnelInfoById(Integer id);

    PageInfo<TunnelInfo> getTunnelInfoList(GetTunnelInfoListReq req);
}