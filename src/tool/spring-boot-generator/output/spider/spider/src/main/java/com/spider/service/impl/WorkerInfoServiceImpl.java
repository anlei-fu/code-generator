package com.undefined.service.impl;

import com.undefined.mapper.WorkerInfoMapper;
import com.undefined.pojo.entity.WorkerInfo;
import com.spider.service.WorkerInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkerInfoServiceImpl implements WorkerInfoService {

    @Autowired
    private WorkerInfoMapper workerInfoMapper;

    @Override
    public boolean addWorkerInfo(AddWorkerInfoReq req) {
        return workerInfoMapper.addWorkerInfo(req) > 0;
    }


    @Override
    public boolean deleteWorkerInfoById(Integer id) {
        return workerInfoMapper.deleteWorkerInfoById(id) > 0;
    }


    @Override
    public boolean updateWorkerInfoById(Integer id, UpdateWorkerInfoByIdReq req) {
        return workerInfoMapper.updateWorkerInfoById(id, req) > 0;
    }


    @Override
    public WorkerInfo getWorkerInfoById(Integer id) {
        return workerInfoMapper.getWorkerInfoById(id);
    }


    @Override
    public PageInfo<WorkerInfo> getWorkerInfoList(GetWorkerInfoListReq req) {
        return workerInfoMapper.getWorkerInfoList(req);
    }
}
