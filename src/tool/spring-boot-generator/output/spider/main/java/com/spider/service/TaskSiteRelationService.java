package com.spider.service;

import com.spider.pojo.dao.TaskSiteRelationDao;

public interface TaskSiteRelationService {

    boolean add(TaskSiteRelationDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,TaskSiteRelationDao dao);

    TaskSiteRelationDao findById(Integer id);
}