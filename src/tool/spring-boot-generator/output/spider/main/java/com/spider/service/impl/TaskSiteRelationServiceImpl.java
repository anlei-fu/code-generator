package com.spider.service.impl;

import com.spider.mapper.TaskSiteRelationMapper;
import com.spider.pojo.dao.TaskSiteRelationDao;
import com.spider.service.TaskSiteRelationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskSiteRelationServiceImpl implements TaskSiteRelationService {

    @Autowired
    private TaskSiteRelationMapper mapper;

    @Override
    public boolean add(TaskSiteRelationDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, TaskSiteRelationDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public TaskSiteRelationDao findById(Integer id) {
        return mapper.findById(id);
    }
}
