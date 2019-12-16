package com.spider.service.impl;

import com.spider.mapper.WorkerInfoMapper;
import com.spider.pojo.entity.WorkerInfo;
import com.spider.service.WorkerInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkerInfoServiceImpl implements WorkerInfoService {

    @Autowired
    private WorkerInfoMapper workerInfoMapper;

    @Override
    public GetWorkerInfoByIdResp getWorkerInfoById(Integer id, GetWorkerInfoByIdReq req) {
        return workerInfoMapper.getWorkerInfoById(id, req);
    }

    @Override
    public boolean deleteWorkerInfoById(Integer id) {
        return workerInfoMapper.deleteWorkerInfoById(id) > 0;
    }

    @Override
    public PageInfo<WorkerInfo> getWorkerInfoByIp(String ip) {
        return workerInfoMapper.getWorkerInfoByIp(ip);
    }


}
