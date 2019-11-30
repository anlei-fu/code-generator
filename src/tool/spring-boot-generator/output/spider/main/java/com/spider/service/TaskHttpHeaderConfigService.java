package com.spider.service;

import com.spider.pojo.dao.TaskHttpHeaderConfigDao;

public interface TaskHttpHeaderConfigService {

    boolean add(TaskHttpHeaderConfigDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,TaskHttpHeaderConfigDao dao);

    TaskHttpHeaderConfigDao findById(Integer id);
}