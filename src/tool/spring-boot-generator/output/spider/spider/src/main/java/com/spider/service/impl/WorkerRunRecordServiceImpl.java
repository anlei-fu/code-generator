package com.spider.service.impl;

import com.github.pagehelper.PageInfo;
import com.spider.mapper.WorkerRunRecordMapper;
import com.spider.pojo.entity.WorkerRunRecord;
import com.spider.pojo.entity.WorkerRunRecord;
import com.spider.pojo.req.AddWorkerRunRecordReq;
import com.spider.pojo.req.GetWorkerRunRecordListReq;
import com.spider.pojo.req.UpdateWorkerRunRecordByIdReq;
import com.spider.service.WorkerRunRecordService;
import com.spider.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class WorkerRunRecordServiceImpl implements WorkerRunRecordService {

    @Autowired
    private WorkerRunRecordMapper workerRunRecordMapper;

    @Override
    public boolean addWorkerRunRecord(AddWorkerRunRecordReq req) {
        return workerRunRecordMapper.addWorkerRunRecord(req) > 0;
    }

    @Override
    public boolean deleteWorkerRunRecordById(Integer id) {
        return workerRunRecordMapper.deleteWorkerRunRecordById(id) > 0;
    }

    @Override
    public boolean updateWorkerRunRecordById(Integer id, UpdateWorkerRunRecordByIdReq req) {
        params params = new UpdateWorkerRunRecordByIdParams(id, req)
        return workerRunRecordMapper.updateWorkerRunRecordById(params) > 0;
    }

    @Override
    public WorkerRunRecord getWorkerRunRecordById(Integer id) {
        return workerRunRecordMapper.getWorkerRunRecordById(id);
    }

    @Override
    public PageInfo<WorkerRunRecord> getWorkerRunRecordList(GetWorkerRunRecordListReq req) {
        return PageHelperUtils.page(()=> workerRunRecordMapper.getWorkerRunRecordList(req));
    }

}
