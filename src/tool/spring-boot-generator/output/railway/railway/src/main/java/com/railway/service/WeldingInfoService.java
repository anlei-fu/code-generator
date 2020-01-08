package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.WeldingInfo;
import com.railway.pojo.req.AddWeldingInfoReq;
import com.railway.pojo.req.GetWeldingInfoListReq;
import com.railway.pojo.req.UpdateWeldingInfoByIdReq;


public interface WeldingInfoService {

    boolean addWeldingInfo(AddWeldingInfoReq req);
    
    boolean deleteWeldingInfoById(Integer id);
    
    boolean updateWeldingInfoById(Integer id, UpdateWeldingInfoByIdReq req);
    
    WeldingInfo getWeldingInfoById(Integer id);
    
    PageInfo<WeldingInfo> getWeldingInfoList(GetWeldingInfoListReq req);

}