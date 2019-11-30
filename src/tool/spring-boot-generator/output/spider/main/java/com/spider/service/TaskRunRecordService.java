package com.spider.service;

import com.spider.pojo.dao.TaskRunRecordDao;

public interface TaskRunRecordService {

    boolean add(TaskRunRecordDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,TaskRunRecordDao dao);

    TaskRunRecordDao findById(Integer id);
}