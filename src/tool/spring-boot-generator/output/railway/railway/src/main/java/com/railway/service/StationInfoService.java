package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.StationInfo;
import com.railway.pojo.req.AddStationInfoReq;
import com.railway.pojo.req.GetStationInfoListReq;
import com.railway.pojo.req.UpdateStationInfoByIdReq;


public interface StationInfoService {

    boolean addStationInfo(AddStationInfoReq req);
    
    boolean deleteStationInfoById(Integer id);
    
    boolean updateStationInfoById(Integer id, UpdateStationInfoByIdReq req);
    
    StationInfo getStationInfoById(Integer id);
    
    PageInfo<StationInfo> getStationInfoList(GetStationInfoListReq req);

}