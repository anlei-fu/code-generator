package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.ThighTrackInfoMapper;
import com.railway.pojo.entity.ThighTrackInfo;
import com.railway.pojo.entity.ThighTrackInfo;
import com.railway.pojo.req.AddThighTrackInfoReq;
import com.railway.pojo.req.GetThighTrackInfoListReq;
import com.railway.pojo.req.UpdateThighTrackInfoByIdReq;
import com.railway.service.ThighTrackInfoService;
import com.railway.utils.PageHelperUtils;
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
        params params = new UpdateThighTrackInfoByIdParams(id, req)
        return thighTrackInfoMapper.updateThighTrackInfoById(params) > 0;
    }

    @Override
    public ThighTrackInfo getThighTrackInfoById(Integer id) {
        return thighTrackInfoMapper.getThighTrackInfoById(id);
    }

    @Override
    public PageInfo<ThighTrackInfo> getThighTrackInfoList(GetThighTrackInfoListReq req) {
        return PageHelperUtils.page(()=> thighTrackInfoMapper.getThighTrackInfoList(req));
    }

}
