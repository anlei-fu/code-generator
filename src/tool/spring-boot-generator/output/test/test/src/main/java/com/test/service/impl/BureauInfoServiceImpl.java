package com.test.service.impl;

import com.test.pojo.req.AddBureauInfoReq;
import com.test.pojo.req.GetBureauInfoListReq;
import com.test.pojo.req.UpdateBureauInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.BureauInfoMapper;
import com.test.pojo.entity.BureauInfo;
import com.test.service.BureauInfoService;
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
        return bureauInfoMapper.updateBureauInfoById(id, req) > 0;
    }


    @Override
    public BureauInfo getBureauInfoById(Integer id) {
        return bureauInfoMapper.getBureauInfoById(id);
    }


    @Override
    public PageInfo<BureauInfo> getBureauInfoList(GetBureauInfoListReq req) {
        return bureauInfoMapper.getBureauInfoList(req);
    }
}
