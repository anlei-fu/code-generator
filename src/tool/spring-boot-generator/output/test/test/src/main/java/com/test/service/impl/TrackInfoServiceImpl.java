package com.undefined.service.impl;

import com.undefined.mapper.TrackInfoMapper;
import com.undefined.pojo.entity.TrackInfo;
import com.spider.service.TrackInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TrackInfoServiceImpl implements TrackInfoService {

    @Autowired
    private TrackInfoMapper trackInfoMapper;

    @Override
    public boolean addTrackInfo(AddTrackInfoReq req) {
        return trackInfoMapper.addTrackInfo(req) > 0;
    }


    @Override
    public boolean deleteTrackInfoById(Integer id) {
        return trackInfoMapper.deleteTrackInfoById(id) > 0;
    }


    @Override
    public boolean updateTrackInfoById(Integer id, UpdateTrackInfoByIdReq req) {
        return trackInfoMapper.updateTrackInfoById(id, req) > 0;
    }


    @Override
    public TrackInfo getTrackInfoById(Integer id) {
        return trackInfoMapper.getTrackInfoById(id);
    }


    @Override
    public PageInfo<TrackInfo> getTrackInfoList(GetTrackInfoListReq req) {
        return trackInfoMapper.getTrackInfoList(req);
    }
}
