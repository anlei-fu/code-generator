package com.undefined.service.impl;

import com.undefined.mapper.WorkerRunRecordMapper;
import com.undefined.pojo.entity.WorkerRunRecord;
import com.spider.service.WorkerRunRecordService;
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
        return workerRunRecordMapper.updateWorkerRunRecordById(id, req) > 0;
    }


    @Override
    public WorkerRunRecord getWorkerRunRecordById(Integer id) {
        return workerRunRecordMapper.getWorkerRunRecordById(id);
    }


    @Override
    public PageInfo<WorkerRunRecord> getWorkerRunRecordList(GetWorkerRunRecordListReq req) {
        return workerRunRecordMapper.getWorkerRunRecordList(req);
    }
}
