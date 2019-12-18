package com.undefined.service;

import com.undefined.pojo.entity.TunnelInfo;

public interface TunnelInfoService {

    boolean addTunnelInfo(AddTunnelInfoReq req);

    boolean deleteTunnelInfoById(Integer id);

    boolean updateTunnelInfoById(Integer id, UpdateTunnelInfoByIdReq req);

    TunnelInfo getTunnelInfoById(Integer id);

    PageInfo<TunnelInfo> getTunnelInfoList(GetTunnelInfoListReq req);
}