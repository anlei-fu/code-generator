package com.undefined.service.impl;

import com.undefined.mapper.TaskCookieConfigMapper;
import com.undefined.pojo.entity.TaskCookieConfig;
import com.spider.service.TaskCookieConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskCookieConfigServiceImpl implements TaskCookieConfigService {

    @Autowired
    private TaskCookieConfigMapper taskCookieConfigMapper;

    @Override
    public boolean addTaskCookieConfig(AddTaskCookieConfigReq req) {
        return taskCookieConfigMapper.addTaskCookieConfig(req) > 0;
    }


    @Override
    public boolean deleteTaskCookieConfigById(Integer id) {
        return taskCookieConfigMapper.deleteTaskCookieConfigById(id) > 0;
    }


    @Override
    public boolean updateTaskCookieConfigById(Integer id, UpdateTaskCookieConfigByIdReq req) {
        return taskCookieConfigMapper.updateTaskCookieConfigById(id, req) > 0;
    }


    @Override
    public TaskCookieConfig getTaskCookieConfigById(Integer id) {
        return taskCookieConfigMapper.getTaskCookieConfigById(id);
    }


    @Override
    public PageInfo<TaskCookieConfig> getTaskCookieConfigList(GetTaskCookieConfigListReq req) {
        return taskCookieConfigMapper.getTaskCookieConfigList(req);
    }
}
