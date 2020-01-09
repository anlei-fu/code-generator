package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.TrackInfoMapper;
import com.railway.pojo.entity.TrackInfo;
import com.railway.pojo.entity.TrackInfo;
import com.railway.pojo.param.UpdateTrackInfoByIdParams;
import com.railway.pojo.req.AddTrackInfoReq;
import com.railway.pojo.req.GetTrackInfoListReq;
import com.railway.pojo.req.UpdateTrackInfoByIdReq;
import com.railway.service.TrackInfoService;
import com.railway.utils.PageHelperUtils;
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
        UpdateTrackInfoByIdParams params = new UpdateTrackInfoByIdParams(id, req);
        return trackInfoMapper.updateTrackInfoById(params) > 0;
    }

    @Override
    public TrackInfo getTrackInfoById(Integer id) {
        return trackInfoMapper.getTrackInfoById(id);
    }

    @Override
    public PageInfo<TrackInfo> getTrackInfoList(GetTrackInfoListReq req) {
        return PageHelperUtils.paging(req, () -> trackInfoMapper.getTrackInfoList(req));
    }

}

