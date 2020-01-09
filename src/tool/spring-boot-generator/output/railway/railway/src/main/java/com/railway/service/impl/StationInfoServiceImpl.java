package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.StationInfoMapper;
import com.railway.pojo.entity.StationInfo;
import com.railway.pojo.entity.StationInfo;
import com.railway.pojo.param.UpdateStationInfoByIdParams;
import com.railway.pojo.req.AddStationInfoReq;
import com.railway.pojo.req.GetStationInfoListReq;
import com.railway.pojo.req.UpdateStationInfoByIdReq;
import com.railway.service.StationInfoService;
import com.railway.utils.PageHelperUtils;
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
        UpdateStationInfoByIdParams params = new UpdateStationInfoByIdParams(id, req);
        return stationInfoMapper.updateStationInfoById(params) > 0;
    }

    @Override
    public StationInfo getStationInfoById(Integer id) {
        return stationInfoMapper.getStationInfoById(id);
    }

    @Override
    public PageInfo<StationInfo> getStationInfoList(GetStationInfoListReq req) {
        return PageHelperUtils.paging(req, () -> stationInfoMapper.getStationInfoList(req));
    }

}

