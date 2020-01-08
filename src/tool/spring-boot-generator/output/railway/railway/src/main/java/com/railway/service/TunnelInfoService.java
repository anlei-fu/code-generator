package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.TunnelInfo;
import com.railway.pojo.req.AddTunnelInfoReq;
import com.railway.pojo.req.GetTunnelInfoListReq;
import com.railway.pojo.req.UpdateTunnelInfoByIdReq;


public interface TunnelInfoService {

    boolean addTunnelInfo(AddTunnelInfoReq req);
    
    boolean deleteTunnelInfoById(Integer id);
    
    boolean updateTunnelInfoById(Integer id, UpdateTunnelInfoByIdReq req);
    
    TunnelInfo getTunnelInfoById(Integer id);
    
    PageInfo<TunnelInfo> getTunnelInfoList(GetTunnelInfoListReq req);

}