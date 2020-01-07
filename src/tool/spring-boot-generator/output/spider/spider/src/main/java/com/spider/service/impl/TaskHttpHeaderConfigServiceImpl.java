package com.spider.service.impl;

import com.github.pagehelper.PageInfo;
import com.spider.mapper.TaskHttpHeaderConfigMapper;
import com.spider.pojo.entity.TaskHttpHeaderConfig;
import com.spider.pojo.entity.TaskHttpHeaderConfig;
import com.spider.pojo.req.AddTaskHttpHeaderConfigReq;
import com.spider.pojo.req.GetTaskHttpHeaderConfigListReq;
import com.spider.pojo.req.UpdateTaskHttpHeaderConfigByIdReq;
import com.spider.service.TaskHttpHeaderConfigService;
import com.spider.utils.PageHelperUtils;
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
        return PageHelperUtils.page(()=> taskHttpHeaderConfigMapper.getTaskHttpHeaderConfigList(req));
    }

}
