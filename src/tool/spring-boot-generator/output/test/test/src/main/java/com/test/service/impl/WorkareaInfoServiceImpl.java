package com.undefined.service.impl;

import com.undefined.mapper.WorkareaInfoMapper;
import com.undefined.pojo.entity.WorkareaInfo;
import com.spider.service.WorkareaInfoService;
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
