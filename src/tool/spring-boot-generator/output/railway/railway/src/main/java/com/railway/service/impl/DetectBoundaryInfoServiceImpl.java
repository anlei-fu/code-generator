package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DetectBoundaryInfoMapper;
import com.railway.pojo.entity.DetectBoundaryInfo;
import com.railway.pojo.entity.DetectBoundaryInfo;
import com.railway.pojo.param.UpdateDetectBoundaryInfoByIdParams;
import com.railway.pojo.req.AddDetectBoundaryInfoReq;
import com.railway.pojo.req.GetDetectBoundaryInfoListReq;
import com.railway.pojo.req.UpdateDetectBoundaryInfoByIdReq;
import com.railway.service.DetectBoundaryInfoService;
import com.railway.utils.PageHelperUtils;
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
        UpdateDetectBoundaryInfoByIdParams params = new UpdateDetectBoundaryInfoByIdParams(id, req);
        return detectBoundaryInfoMapper.updateDetectBoundaryInfoById(params) > 0;
    }

    @Override
    public DetectBoundaryInfo getDetectBoundaryInfoById(Integer id) {
        return detectBoundaryInfoMapper.getDetectBoundaryInfoById(id);
    }

    @Override
    public PageInfo<DetectBoundaryInfo> getDetectBoundaryInfoList(GetDetectBoundaryInfoListReq req) {
        return PageHelperUtils.paging(req, () -> detectBoundaryInfoMapper.getDetectBoundaryInfoList(req));
    }

}

