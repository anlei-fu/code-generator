package com.spider.service;

import com.spider.pojo.dao.TaskCookieConfigDao;

public interface TaskCookieConfigService {

    boolean add(TaskCookieConfigDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,TaskCookieConfigDao dao);

    TaskCookieConfigDao findById(Integer id);
}