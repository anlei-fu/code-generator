package com.test.service;

import com.test.pojo.entity.StationInfo;
import com.test.pojo.req.AddStationInfoReq;
import com.test.pojo.req.GetStationInfoListReq;
import com.test.pojo.req.UpdateStationInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface StationInfoService {

    boolean addStationInfo(AddStationInfoReq req);

    boolean deleteStationInfoById(Integer id);

    boolean updateStationInfoById(Integer id, UpdateStationInfoByIdReq req);

    StationInfo getStationInfoById(Integer id);

    PageInfo<StationInfo> getStationInfoList(GetStationInfoListReq req);
}