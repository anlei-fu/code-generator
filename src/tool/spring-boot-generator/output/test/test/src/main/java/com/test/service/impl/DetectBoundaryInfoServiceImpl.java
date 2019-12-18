package com.undefined.service.impl;

import com.undefined.mapper.DetectBoundaryInfoMapper;
import com.undefined.pojo.entity.DetectBoundaryInfo;
import com.spider.service.DetectBoundaryInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetectBoundaryInfoServiceImpl implements DetectBoundaryInfoService {

    @Autowired
    private DetectBoundaryInfoMapper detectBoundaryInfoMapper;

    @Override
    public boolean addDetectBoundaryInfo(AddDetectBoundaryInfoReq req) {
        return detectBoundaryInfoMapper.addDetectBoundaryInfo(req) > 0;
    }


    @Override
    public boolean deleteDetectBoundaryInfoById(Integer id) {
        return detectBoundaryInfoMapper.deleteDetectBoundaryInfoById(id) > 0;
    }


    @Override
    public boolean updateDetectBoundaryInfoById(Integer id, UpdateDetectBoundaryInfoByIdReq req) {
        return detectBoundaryInfoMapper.updateDetectBoundaryInfoById(id, req) > 0;
    }


    @Override
    public DetectBoundaryInfo getDetectBoundaryInfoById(Integer id) {
        return detectBoundaryInfoMapper.getDetectBoundaryInfoById(id);
    }


    @Override
    public PageInfo<DetectBoundaryInfo> getDetectBoundaryInfoList(GetDetectBoundaryInfoListReq req) {
        return detectBoundaryInfoMapper.getDetectBoundaryInfoList(req);
    }
}
