package com.undefined.service.impl;

import com.undefined.mapper.TaskScriptConfigMapper;
import com.undefined.pojo.entity.TaskScriptConfig;
import com.spider.service.TaskScriptConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskScriptConfigServiceImpl implements TaskScriptConfigService {

    @Autowired
    private TaskScriptConfigMapper taskScriptConfigMapper;

    @Override
    public boolean addTaskScriptConfig(AddTaskScriptConfigReq req) {
        return taskScriptConfigMapper.addTaskScriptConfig(req) > 0;
    }


    @Override
    public boolean deleteTaskScriptConfigById(Integer id) {
        return taskScriptConfigMapper.deleteTaskScriptConfigById(id) > 0;
    }


    @Override
    public boolean updateTaskScriptConfigById(Integer id, UpdateTaskScriptConfigByIdReq req) {
        return taskScriptConfigMapper.updateTaskScriptConfigById(id, req) > 0;
    }


    @Override
    public TaskScriptConfig getTaskScriptConfigById(Integer id) {
        return taskScriptConfigMapper.getTaskScriptConfigById(id);
    }


    @Override
    public PageInfo<TaskScriptConfig> getTaskScriptConfigList(GetTaskScriptConfigListReq req) {
        return taskScriptConfigMapper.getTaskScriptConfigList(req);
    }
}
