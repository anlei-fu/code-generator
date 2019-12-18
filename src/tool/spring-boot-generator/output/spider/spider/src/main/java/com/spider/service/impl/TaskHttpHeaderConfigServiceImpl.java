package com.undefined.service.impl;

import com.undefined.mapper.TaskHttpHeaderConfigMapper;
import com.undefined.pojo.entity.TaskHttpHeaderConfig;
import com.spider.service.TaskHttpHeaderConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskHttpHeaderConfigServiceImpl implements TaskHttpHeaderConfigService {

    @Autowired
    private TaskHttpHeaderConfigMapper taskHttpHeaderConfigMapper;

    @Override
    public boolean addTaskHttpHeaderConfig(AddTaskHttpHeaderConfigReq req) {
        return taskHttpHeaderConfigMapper.addTaskHttpHeaderConfig(req) > 0;
    }


    @Override
    public boolean deleteTaskHttpHeaderConfigById(Integer id) {
        return taskHttpHeaderConfigMapper.deleteTaskHttpHeaderConfigById(id) > 0;
    }


    @Override
    public boolean updateTaskHttpHeaderConfigById(Integer id, UpdateTaskHttpHeaderConfigByIdReq req) {
        return taskHttpHeaderConfigMapper.updateTaskHttpHeaderConfigById(id, req) > 0;
    }


    @Override
    public TaskHttpHeaderConfig getTaskHttpHeaderConfigById(Integer id) {
        return taskHttpHeaderConfigMapper.getTaskHttpHeaderConfigById(id);
    }


    @Override
    public PageInfo<TaskHttpHeaderConfig> getTaskHttpHeaderConfigList(GetTaskHttpHeaderConfigListReq req) {
        return taskHttpHeaderConfigMapper.getTaskHttpHeaderConfigList(req);
    }
}
