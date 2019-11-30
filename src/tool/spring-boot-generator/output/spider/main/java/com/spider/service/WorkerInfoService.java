package com.spider.service;

import com.spider.pojo.dao.WorkerInfoDao;

public interface WorkerInfoService {

    boolean add(WorkerInfoDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,WorkerInfoDao dao);

    WorkerInfoDao findById(Integer id);
}