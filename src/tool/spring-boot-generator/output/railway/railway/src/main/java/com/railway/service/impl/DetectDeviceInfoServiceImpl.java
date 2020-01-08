package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DetectDeviceInfoMapper;
import com.railway.pojo.entity.DetectDeviceInfo;
import com.railway.pojo.entity.DetectDeviceInfo;
import com.railway.pojo.req.AddDetectDeviceInfoReq;
import com.railway.pojo.req.GetDetectDeviceInfoListReq;
import com.railway.pojo.req.UpdateDetectDeviceInfoByIdReq;
import com.railway.service.DetectDeviceInfoService;
import com.railway.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DetectDeviceInfoServiceImpl implements DetectDeviceInfoService {

    @Autowired
    private DetectDeviceInfoMapper detectDeviceInfoMapper;

    @Override
    public boolean addDetectDeviceInfo(AddDetectDeviceInfoReq req) {
        return detectDeviceInfoMapper.addDetectDeviceInfo(req) > 0;
    }

    @Override
    public boolean deleteDetectDeviceInfoById(Integer id) {
        return detectDeviceInfoMapper.deleteDetectDeviceInfoById(id) > 0;
    }

    @Override
    public boolean updateDetectDeviceInfoById(Integer id, UpdateDetectDeviceInfoByIdReq req) {
        params params = new UpdateDetectDeviceInfoByIdParams(id, req)
        return detectDeviceInfoMapper.updateDetectDeviceInfoById(params) > 0;
    }

    @Override
    public DetectDeviceInfo getDetectDeviceInfoById(Integer id) {
        return detectDeviceInfoMapper.getDetectDeviceInfoById(id);
    }

    @Override
    public PageInfo<DetectDeviceInfo> getDetectDeviceInfoList(GetDetectDeviceInfoListReq req) {
        return PageHelperUtils.page(()=> detectDeviceInfoMapper.getDetectDeviceInfoList(req));
    }

}
