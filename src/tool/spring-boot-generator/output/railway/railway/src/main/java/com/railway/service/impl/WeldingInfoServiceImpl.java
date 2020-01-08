package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.WeldingInfoMapper;
import com.railway.pojo.entity.WeldingInfo;
import com.railway.pojo.entity.WeldingInfo;
import com.railway.pojo.req.AddWeldingInfoReq;
import com.railway.pojo.req.GetWeldingInfoListReq;
import com.railway.pojo.req.UpdateWeldingInfoByIdReq;
import com.railway.service.WeldingInfoService;
import com.railway.utils.PageHelperUtils;
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
        params params = new UpdateWeldingInfoByIdParams(id, req)
        return weldingInfoMapper.updateWeldingInfoById(params) > 0;
    }

    @Override
    public WeldingInfo getWeldingInfoById(Integer id) {
        return weldingInfoMapper.getWeldingInfoById(id);
    }

    @Override
    public PageInfo<WeldingInfo> getWeldingInfoList(GetWeldingInfoListReq req) {
        return PageHelperUtils.page(()=> weldingInfoMapper.getWeldingInfoList(req));
    }

}
