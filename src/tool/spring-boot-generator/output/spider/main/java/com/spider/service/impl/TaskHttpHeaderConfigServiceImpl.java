package com.spider.service.impl;

import com.spider.mapper.TaskHttpHeaderConfigMapper;
import com.spider.pojo.dao.TaskHttpHeaderConfigDao;
import com.spider.service.TaskHttpHeaderConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskHttpHeaderConfigServiceImpl implements TaskHttpHeaderConfigService {

    @Autowired
    private TaskHttpHeaderConfigMapper mapper;

    @Override
    public boolean add(TaskHttpHeaderConfigDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, TaskHttpHeaderConfigDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public TaskHttpHeaderConfigDao findById(Integer id) {
        return mapper.findById(id);
    }
}
