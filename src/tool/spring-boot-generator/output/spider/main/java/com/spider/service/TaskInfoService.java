package com.spider.service;

import com.spider.pojo.dao.TaskInfoDao;

public interface TaskInfoService {

    boolean add(TaskInfoDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,TaskInfoDao dao);

    TaskInfoDao findById(Integer id);
}