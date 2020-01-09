package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.BureauInfoMapper;
import com.railway.pojo.entity.BureauInfo;
import com.railway.pojo.entity.BureauInfo;
import com.railway.pojo.param.UpdateBureauInfoByIdParams;
import com.railway.pojo.req.AddBureauInfoReq;
import com.railway.pojo.req.GetBureauInfoListReq;
import com.railway.pojo.req.UpdateBureauInfoByIdReq;
import com.railway.service.BureauInfoService;
import com.railway.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BureauInfoServiceImpl implements BureauInfoService {

    @Autowired
    private BureauInfoMapper bureauInfoMapper;

    @Override
    public boolean addBureauInfo(AddBureauInfoReq req) {
        return bureauInfoMapper.addBureauInfo(req) > 0;
    }

    @Override
    public boolean deleteBureauInfoById(Integer id) {
        return bureauInfoMapper.deleteBureauInfoById(id) > 0;
    }

    @Override
    public boolean updateBureauInfoById(Integer id, UpdateBureauInfoByIdReq req) {
        UpdateBureauInfoByIdParams params = new UpdateBureauInfoByIdParams(id, req);
        return bureauInfoMapper.updateBureauInfoById(params) > 0;
    }

    @Override
    public BureauInfo getBureauInfoById(Integer id) {
        return bureauInfoMapper.getBureauInfoById(id);
    }

    @Override
    public PageInfo<BureauInfo> getBureauInfoList(GetBureauInfoListReq req) {
        return PageHelperUtils.paging(req, () -> bureauInfoMapper.getBureauInfoList(req));
    }

}

