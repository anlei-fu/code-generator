package com.spider.service.impl;

import com.spider.mapper.TaskCookieConfigMapper;
import com.spider.pojo.dao.TaskCookieConfigDao;
import com.spider.service.TaskCookieConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskCookieConfigServiceImpl implements TaskCookieConfigService {

    @Autowired
    private TaskCookieConfigMapper mapper;

    @Override
    public boolean add(TaskCookieConfigDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, TaskCookieConfigDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public TaskCookieConfigDao findById(Integer id) {
        return mapper.findById(id);
    }
}
