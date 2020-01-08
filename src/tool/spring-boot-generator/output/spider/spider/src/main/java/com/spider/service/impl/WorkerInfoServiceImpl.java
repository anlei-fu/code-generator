package com.spider.service.impl;

import com.github.pagehelper.PageInfo;
import com.spider.mapper.WorkerInfoMapper;
import com.spider.pojo.entity.WorkerInfo;
import com.spider.pojo.entity.WorkerInfo;
import com.spider.pojo.req.AddWorkerInfoReq;
import com.spider.pojo.req.GetWorkerInfoListReq;
import com.spider.pojo.req.UpdateWorkerInfoByIdReq;
import com.spider.service.WorkerInfoService;
import com.spider.utils.PageHelperUtils;
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
        params params = new UpdateWorkerInfoByIdParams(id, req)
        return workerInfoMapper.updateWorkerInfoById(params) > 0;
    }

    @Override
    public WorkerInfo getWorkerInfoById(Integer id) {
        return workerInfoMapper.getWorkerInfoById(id);
    }

    @Override
    public PageInfo<WorkerInfo> getWorkerInfoList(GetWorkerInfoListReq req) {
        return PageHelperUtils.page(()=> workerInfoMapper.getWorkerInfoList(req));
    }

}
