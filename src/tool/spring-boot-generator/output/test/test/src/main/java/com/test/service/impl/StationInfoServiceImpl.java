package com.undefined.service.impl;

import com.undefined.mapper.StationInfoMapper;
import com.undefined.pojo.entity.StationInfo;
import com.spider.service.StationInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StationInfoServiceImpl implements StationInfoService {

    @Autowired
    private StationInfoMapper stationInfoMapper;

    @Override
    public boolean addStationInfo(AddStationInfoReq req) {
        return stationInfoMapper.addStationInfo(req) > 0;
    }


    @Override
    public boolean deleteStationInfoById(Integer id) {
        return stationInfoMapper.deleteStationInfoById(id) > 0;
    }


    @Override
    public boolean updateStationInfoById(Integer id, UpdateStationInfoByIdReq req) {
        return stationInfoMapper.updateStationInfoById(id, req) > 0;
    }


    @Override
    public StationInfo getStationInfoById(Integer id) {
        return stationInfoMapper.getStationInfoById(id);
    }


    @Override
    public PageInfo<StationInfo> getStationInfoList(GetStationInfoListReq req) {
        return stationInfoMapper.getStationInfoList(req);
    }
}
