package com.undefined.service;

import com.undefined.pojo.entity.WorkerRunRecord;

public interface WorkerRunRecordService {

    boolean addWorkerRunRecord(AddWorkerRunRecordReq req);

    boolean deleteWorkerRunRecordById(Integer id);

    boolean updateWorkerRunRecordById(Integer id, UpdateWorkerRunRecordByIdReq req);

    WorkerRunRecord getWorkerRunRecordById(Integer id);

    PageInfo<WorkerRunRecord> getWorkerRunRecordList(GetWorkerRunRecordListReq req);
}