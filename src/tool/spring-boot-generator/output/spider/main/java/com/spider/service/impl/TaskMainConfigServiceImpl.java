package com.spider.service.impl;

import com.spider.mapper.TaskMainConfigMapper;
import com.spider.pojo.dao.TaskMainConfigDao;
import com.spider.service.TaskMainConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskMainConfigServiceImpl implements TaskMainConfigService {

    @Autowired
    private TaskMainConfigMapper mapper;

    @Override
    public boolean add(TaskMainConfigDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, TaskMainConfigDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public TaskMainConfigDao findById(Integer id) {
        return mapper.findById(id);
    }
}
