package com.test.service.impl;

import com.test.pojo.req.AddWeldingInfoReq;
import com.test.pojo.req.GetWeldingInfoListReq;
import com.test.pojo.req.UpdateWeldingInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.WeldingInfoMapper;
import com.test.pojo.entity.WeldingInfo;
import com.test.service.WeldingInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class WeldingInfoServiceImpl implements WeldingInfoService {

    @Autowired
    private WeldingInfoMapper weldingInfoMapper;

    @Override
    public boolean addWeldingInfo(AddWeldingInfoReq req) {
        return weldingInfoMapper.addWeldingInfo(req) > 0;
    }


    @Override
    public boolean deleteWeldingInfoById(Integer id) {
        return weldingInfoMapper.deleteWeldingInfoById(id) > 0;
    }


    @Override
    public boolean updateWeldingInfoById(Integer id, UpdateWeldingInfoByIdReq req) {
        return weldingInfoMapper.updateWeldingInfoById(id, req) > 0;
    }


    @Override
    public WeldingInfo getWeldingInfoById(Integer id) {
        return weldingInfoMapper.getWeldingInfoById(id);
    }


    @Override
    public PageInfo<WeldingInfo> getWeldingInfoList(GetWeldingInfoListReq req) {
        return weldingInfoMapper.getWeldingInfoList(req);
    }
}
