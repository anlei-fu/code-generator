package com.spider.service;

import com.spider.pojo.dao.TaskScriptConfigDao;

public interface TaskScriptConfigService {

    boolean add(TaskScriptConfigDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,TaskScriptConfigDao dao);

    TaskScriptConfigDao findById(Integer id);
}