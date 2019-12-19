package com.test.service.impl;

import com.test.pojo.req.AddDetectBoundaryInfoReq;
import com.test.pojo.req.GetDetectBoundaryInfoListReq;
import com.test.pojo.req.UpdateDetectBoundaryInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.DetectBoundaryInfoMapper;
import com.test.pojo.entity.DetectBoundaryInfo;
import com.test.service.DetectBoundaryInfoService;
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
