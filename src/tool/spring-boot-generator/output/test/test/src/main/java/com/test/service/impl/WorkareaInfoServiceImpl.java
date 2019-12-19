package com.test.service.impl;

import com.test.pojo.req.AddWorkareaInfoReq;
import com.test.pojo.req.GetWorkareaInfoListReq;
import com.test.pojo.req.UpdateWorkareaInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.WorkareaInfoMapper;
import com.test.pojo.entity.WorkareaInfo;
import com.test.service.WorkareaInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class WorkareaInfoServiceImpl implements WorkareaInfoService {

    @Autowired
    private WorkareaInfoMapper workareaInfoMapper;

    @Override
    public boolean addWorkareaInfo(AddWorkareaInfoReq req) {
        return workareaInfoMapper.addWorkareaInfo(req) > 0;
    }


    @Override
    public boolean deleteWorkareaInfoById(Integer id) {
        return workareaInfoMapper.deleteWorkareaInfoById(id) > 0;
    }


    @Override
    public boolean updateWorkareaInfoById(Integer id, UpdateWorkareaInfoByIdReq req) {
        return workareaInfoMapper.updateWorkareaInfoById(id, req) > 0;
    }


    @Override
    public WorkareaInfo getWorkareaInfoById(Integer id) {
        return workareaInfoMapper.getWorkareaInfoById(id);
    }


    @Override
    public PageInfo<WorkareaInfo> getWorkareaInfoList(GetWorkareaInfoListReq req) {
        return workareaInfoMapper.getWorkareaInfoList(req);
    }
}
