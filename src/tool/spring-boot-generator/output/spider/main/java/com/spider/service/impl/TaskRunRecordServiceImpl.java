package com.spider.service.impl;

import com.spider.mapper.TaskRunRecordMapper;
import com.spider.pojo.dao.TaskRunRecordDao;
import com.spider.service.TaskRunRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskRunRecordServiceImpl implements TaskRunRecordService {

    @Autowired
    private TaskRunRecordMapper mapper;

    @Override
    public boolean add(TaskRunRecordDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, TaskRunRecordDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public TaskRunRecordDao findById(Integer id) {
        return mapper.findById(id);
    }
}
