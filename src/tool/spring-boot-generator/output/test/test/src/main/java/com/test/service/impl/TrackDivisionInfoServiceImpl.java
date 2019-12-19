package com.test.service.impl;

import com.test.pojo.req.AddTrackDivisionInfoReq;
import com.test.pojo.req.GetTrackDivisionInfoListReq;
import com.test.pojo.req.UpdateTrackDivisionInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.TrackDivisionInfoMapper;
import com.test.pojo.entity.TrackDivisionInfo;
import com.test.service.TrackDivisionInfoService;
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
