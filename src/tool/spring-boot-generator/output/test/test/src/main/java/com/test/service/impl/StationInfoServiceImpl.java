package com.test.service.impl;

import com.test.pojo.req.AddStationInfoReq;
import com.test.pojo.req.GetStationInfoListReq;
import com.test.pojo.req.UpdateStationInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.StationInfoMapper;
import com.test.pojo.entity.StationInfo;
import com.test.service.StationInfoService;
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
