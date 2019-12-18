package com.undefined.service;

import com.undefined.pojo.entity.StationInfo;

public interface StationInfoService {

    boolean addStationInfo(AddStationInfoReq req);

    boolean deleteStationInfoById(Integer id);

    boolean updateStationInfoById(Integer id, UpdateStationInfoByIdReq req);

    StationInfo getStationInfoById(Integer id);

    PageInfo<StationInfo> getStationInfoList(GetStationInfoListReq req);
}