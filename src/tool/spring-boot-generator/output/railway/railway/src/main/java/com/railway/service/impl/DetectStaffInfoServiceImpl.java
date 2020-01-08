package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DetectStaffInfoMapper;
import com.railway.pojo.entity.DetectStaffInfo;
import com.railway.pojo.entity.DetectStaffInfo;
import com.railway.pojo.req.AddDetectStaffInfoReq;
import com.railway.pojo.req.GetDetectStaffInfoListReq;
import com.railway.pojo.req.UpdateDetectStaffInfoByIdReq;
import com.railway.service.DetectStaffInfoService;
import com.railway.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DetectStaffInfoServiceImpl implements DetectStaffInfoService {

    @Autowired
    private DetectStaffInfoMapper detectStaffInfoMapper;

    @Override
    public boolean addDetectStaffInfo(AddDetectStaffInfoReq req) {
        return detectStaffInfoMapper.addDetectStaffInfo(req) > 0;
    }

    @Override
    public boolean deleteDetectStaffInfoById(Integer id) {
        return detectStaffInfoMapper.deleteDetectStaffInfoById(id) > 0;
    }

    @Override
    public boolean updateDetectStaffInfoById(Integer id, UpdateDetectStaffInfoByIdReq req) {
        params params = new UpdateDetectStaffInfoByIdParams(id, req)
        return detectStaffInfoMapper.updateDetectStaffInfoById(params) > 0;
    }

    @Override
    public DetectStaffInfo getDetectStaffInfoById(Integer id) {
        return detectStaffInfoMapper.getDetectStaffInfoById(id);
    }

    @Override
    public PageInfo<DetectStaffInfo> getDetectStaffInfoList(GetDetectStaffInfoListReq req) {
        return PageHelperUtils.page(()=> detectStaffInfoMapper.getDetectStaffInfoList(req));
    }

}
