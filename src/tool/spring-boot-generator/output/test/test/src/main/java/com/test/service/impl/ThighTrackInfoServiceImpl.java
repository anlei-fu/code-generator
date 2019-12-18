package com.undefined.service.impl;

import com.undefined.mapper.ThighTrackInfoMapper;
import com.undefined.pojo.entity.ThighTrackInfo;
import com.spider.service.ThighTrackInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ThighTrackInfoServiceImpl implements ThighTrackInfoService {

    @Autowired
    private ThighTrackInfoMapper thighTrackInfoMapper;

    @Override
    public boolean addThighTrackInfo(AddThighTrackInfoReq req) {
        return thighTrackInfoMapper.addThighTrackInfo(req) > 0;
    }


    @Override
    public boolean deleteThighTrackInfoById(Integer id) {
        return thighTrackInfoMapper.deleteThighTrackInfoById(id) > 0;
    }


    @Override
    public boolean updateThighTrackInfoById(Integer id, UpdateThighTrackInfoByIdReq req) {
        return thighTrackInfoMapper.updateThighTrackInfoById(id, req) > 0;
    }


    @Override
    public ThighTrackInfo getThighTrackInfoById(Integer id) {
        return thighTrackInfoMapper.getThighTrackInfoById(id);
    }


    @Override
    public PageInfo<ThighTrackInfo> getThighTrackInfoList(GetThighTrackInfoListReq req) {
        return thighTrackInfoMapper.getThighTrackInfoList(req);
    }
}
