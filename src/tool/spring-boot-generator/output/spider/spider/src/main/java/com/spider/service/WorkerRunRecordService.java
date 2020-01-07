package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.WorkerRunRecord;
import com.spider.pojo.req.AddWorkerRunRecordReq;
import com.spider.pojo.req.GetWorkerRunRecordListReq;
import com.spider.pojo.req.UpdateWorkerRunRecordByIdReq;


public interface WorkerRunRecordService {

    boolean addWorkerRunRecord(AddWorkerRunRecordReq req);
    
    boolean deleteWorkerRunRecordById(Integer id);
    
    boolean updateWorkerRunRecordById(Integer id, UpdateWorkerRunRecordByIdReq req);
    
    WorkerRunRecord getWorkerRunRecordById(Integer id);
    
    PageInfo<WorkerRunRecord> getWorkerRunRecordList(GetWorkerRunRecordListReq req);

}