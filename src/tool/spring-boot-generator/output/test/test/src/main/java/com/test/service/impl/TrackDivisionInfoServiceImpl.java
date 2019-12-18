package com.undefined.service.impl;

import com.undefined.mapper.TrackDivisionInfoMapper;
import com.undefined.pojo.entity.TrackDivisionInfo;
import com.spider.service.TrackDivisionInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TrackDivisionInfoServiceImpl implements TrackDivisionInfoService {

    @Autowired
    private TrackDivisionInfoMapper trackDivisionInfoMapper;

    @Override
    public boolean addTrackDivisionInfo(AddTrackDivisionInfoReq req) {
        return trackDivisionInfoMapper.addTrackDivisionInfo(req) > 0;
    }


    @Override
    public boolean deleteTrackDivisionInfoById(Integer id) {
        return trackDivisionInfoMapper.deleteTrackDivisionInfoById(id) > 0;
    }


    @Override
    public boolean updateTrackDivisionInfoById(Integer id, UpdateTrackDivisionInfoByIdReq req) {
        return trackDivisionInfoMapper.updateTrackDivisionInfoById(id, req) > 0;
    }


    @Override
    public TrackDivisionInfo getTrackDivisionInfoById(Integer id) {
        return trackDivisionInfoMapper.getTrackDivisionInfoById(id);
    }


    @Override
    public PageInfo<TrackDivisionInfo> getTrackDivisionInfoList(GetTrackDivisionInfoListReq req) {
        return trackDivisionInfoMapper.getTrackDivisionInfoList(req);
    }
}
