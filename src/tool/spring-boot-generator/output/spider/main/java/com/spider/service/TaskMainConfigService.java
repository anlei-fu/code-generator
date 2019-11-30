package com.spider.service;

import com.spider.pojo.dao.TaskMainConfigDao;

public interface TaskMainConfigService {

    boolean add(TaskMainConfigDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,TaskMainConfigDao dao);

    TaskMainConfigDao findById(Integer id);
}