package com.spider.service;

import com.spider.pojo.dao.WorkTaskRecordDao;

public interface WorkTaskRecordService {

    boolean add(WorkTaskRecordDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,WorkTaskRecordDao dao);

    WorkTaskRecordDao findById(Integer id);
}