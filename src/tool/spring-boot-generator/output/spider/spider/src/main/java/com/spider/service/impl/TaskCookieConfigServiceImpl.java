package com.spider.service.impl;

import com.github.pagehelper.PageInfo;
import com.spider.mapper.TaskCookieConfigMapper;
import com.spider.pojo.entity.TaskCookieConfig;
import com.spider.pojo.entity.TaskCookieConfig;
import com.spider.pojo.req.AddTaskCookieConfigReq;
import com.spider.pojo.req.GetTaskCookieConfigListReq;
import com.spider.pojo.req.UpdateTaskCookieConfigByIdReq;
import com.spider.service.TaskCookieConfigService;
import com.spider.utils.PageHelperUtils;
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
