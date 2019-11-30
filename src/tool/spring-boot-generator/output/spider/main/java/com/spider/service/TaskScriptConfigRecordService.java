package com.spider.service;

import com.spider.pojo.dao.TaskScriptConfigRecordDao;

public interface TaskScriptConfigRecordService {

    boolean add(TaskScriptConfigRecordDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,TaskScriptConfigRecordDao dao);

    TaskScriptConfigRecordDao findById(Integer id);
}