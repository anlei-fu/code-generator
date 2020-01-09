package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.WorshopBoundaryInfoMapper;
import com.railway.pojo.entity.WorshopBoundaryInfo;
import com.railway.pojo.entity.WorshopBoundaryInfo;
import com.railway.pojo.param.UpdateWorshopBoundaryInfoByIdParams;
import com.railway.pojo.req.AddWorshopBoundaryInfoReq;
import com.railway.pojo.req.GetWorshopBoundaryInfoListReq;
import com.railway.pojo.req.UpdateWorshopBoundaryInfoByIdReq;
import com.railway.service.WorshopBoundaryInfoService;
import com.railway.utils.PageHelperUtils;
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
        UpdateWorshopBoundaryInfoByIdParams params = new UpdateWorshopBoundaryInfoByIdParams(id, req);
        return worshopBoundaryInfoMapper.updateWorshopBoundaryInfoById(params) > 0;
    }

    @Override
    public WorshopBoundaryInfo getWorshopBoundaryInfoById(Integer id) {
        return worshopBoundaryInfoMapper.getWorshopBoundaryInfoById(id);
    }

    @Override
    public PageInfo<WorshopBoundaryInfo> getWorshopBoundaryInfoList(GetWorshopBoundaryInfoListReq req) {
        return PageHelperUtils.paging(req, () -> worshopBoundaryInfoMapper.getWorshopBoundaryInfoList(req));
    }

}

