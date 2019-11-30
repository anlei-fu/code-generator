package com.spider.service.impl;

import com.spider.mapper.TaskScriptConfigRecordMapper;
import com.spider.pojo.dao.TaskScriptConfigRecordDao;
import com.spider.service.TaskScriptConfigRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskScriptConfigRecordServiceImpl implements TaskScriptConfigRecordService {

    @Autowired
    private TaskScriptConfigRecordMapper mapper;

    @Override
    public boolean add(TaskScriptConfigRecordDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, TaskScriptConfigRecordDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public TaskScriptConfigRecordDao findById(Integer id) {
        return mapper.findById(id);
    }
}
