package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.TrackDivisionInfoMapper;
import com.railway.pojo.entity.TrackDivisionInfo;
import com.railway.pojo.entity.TrackDivisionInfo;
import com.railway.pojo.req.AddTrackDivisionInfoReq;
import com.railway.pojo.req.GetTrackDivisionInfoListReq;
import com.railway.pojo.req.UpdateTrackDivisionInfoByIdReq;
import com.railway.service.TrackDivisionInfoService;
import com.railway.utils.PageHelperUtils;
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
        params params = new UpdateTrackDivisionInfoByIdParams(id, req)
        return trackDivisionInfoMapper.updateTrackDivisionInfoById(params) > 0;
    }

    @Override
    public TrackDivisionInfo getTrackDivisionInfoById(Integer id) {
        return trackDivisionInfoMapper.getTrackDivisionInfoById(id);
    }

    @Override
    public PageInfo<TrackDivisionInfo> getTrackDivisionInfoList(GetTrackDivisionInfoListReq req) {
        return PageHelperUtils.page(()=> trackDivisionInfoMapper.getTrackDivisionInfoList(req));
    }

}
