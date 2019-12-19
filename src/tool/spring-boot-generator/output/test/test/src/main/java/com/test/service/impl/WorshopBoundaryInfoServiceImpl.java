package com.test.service.impl;

import com.test.pojo.req.AddWorshopBoundaryInfoReq;
import com.test.pojo.req.GetWorshopBoundaryInfoListReq;
import com.test.pojo.req.UpdateWorshopBoundaryInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.WorshopBoundaryInfoMapper;
import com.test.pojo.entity.WorshopBoundaryInfo;
import com.test.service.WorshopBoundaryInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class WorshopBoundaryInfoServiceImpl implements WorshopBoundaryInfoService {

    @Autowired
    private WorshopBoundaryInfoMapper worshopBoundaryInfoMapper;

    @Override
    public boolean addWorshopBoundaryInfo(AddWorshopBoundaryInfoReq req) {
        return worshopBoundaryInfoMapper.addWorshopBoundaryInfo(req) > 0;
    }


    @Override
    public boolean deleteWorshopBoundaryInfoById(Integer id) {
        return worshopBoundaryInfoMapper.deleteWorshopBoundaryInfoById(id) > 0;
    }


    @Override
    public boolean updateWorshopBoundaryInfoById(Integer id, UpdateWorshopBoundaryInfoByIdReq req) {
        return worshopBoundaryInfoMapper.updateWorshopBoundaryInfoById(id, req) > 0;
    }


    @Override
    public WorshopBoundaryInfo getWorshopBoundaryInfoById(Integer id) {
        return worshopBoundaryInfoMapper.getWorshopBoundaryInfoById(id);
    }


    @Override
    public PageInfo<WorshopBoundaryInfo> getWorshopBoundaryInfoList(GetWorshopBoundaryInfoListReq req) {
        return worshopBoundaryInfoMapper.getWorshopBoundaryInfoList(req);
    }
}
