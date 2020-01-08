package com.spider.service.impl;

import com.github.pagehelper.PageInfo;
import com.spider.mapper.TaskScriptConfigMapper;
import com.spider.pojo.entity.TaskScriptConfig;
import com.spider.pojo.entity.TaskScriptConfig;
import com.spider.pojo.req.AddTaskScriptConfigReq;
import com.spider.pojo.req.GetTaskScriptConfigListReq;
import com.spider.pojo.req.UpdateTaskScriptConfigByIdReq;
import com.spider.service.TaskScriptConfigService;
import com.spider.utils.PageHelperUtils;
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
        params params = new UpdateTaskScriptConfigByIdParams(id, req)
        return taskScriptConfigMapper.updateTaskScriptConfigById(params) > 0;
    }

    @Override
    public TaskScriptConfig getTaskScriptConfigById(Integer id) {
        return taskScriptConfigMapper.getTaskScriptConfigById(id);
    }

    @Override
    public PageInfo<TaskScriptConfig> getTaskScriptConfigList(GetTaskScriptConfigListReq req) {
        return PageHelperUtils.page(()=> taskScriptConfigMapper.getTaskScriptConfigList(req));
    }

}
