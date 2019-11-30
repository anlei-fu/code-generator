package com.spider.service.impl;

import com.spider.mapper.TaskInfoMapper;
import com.spider.pojo.dao.TaskInfoDao;
import com.spider.service.TaskInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskInfoServiceImpl implements TaskInfoService {

    @Autowired
    private TaskInfoMapper mapper;

    @Override
    public boolean add(TaskInfoDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, TaskInfoDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public TaskInfoDao findById(Integer id) {
        return mapper.findById(id);
    }
}
