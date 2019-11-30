package com.spider.service;

import com.spider.pojo.dao.WorkerRunRecordDao;

public interface WorkerRunRecordService {

    boolean add(WorkerRunRecordDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,WorkerRunRecordDao dao);

    WorkerRunRecordDao findById(Integer id);
}