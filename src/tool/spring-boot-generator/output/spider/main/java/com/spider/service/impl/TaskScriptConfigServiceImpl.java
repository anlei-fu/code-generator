package com.spider.service.impl;

import com.spider.mapper.TaskScriptConfigMapper;
import com.spider.pojo.dao.TaskScriptConfigDao;
import com.spider.service.TaskScriptConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskScriptConfigServiceImpl implements TaskScriptConfigService {

    @Autowired
    private TaskScriptConfigMapper mapper;

    @Override
    public boolean add(TaskScriptConfigDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, TaskScriptConfigDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public TaskScriptConfigDao findById(Integer id) {
        return mapper.findById(id);
    }
}
