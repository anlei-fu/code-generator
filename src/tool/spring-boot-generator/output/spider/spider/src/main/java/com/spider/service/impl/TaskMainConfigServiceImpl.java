package com.spider.service.impl;

import com.github.pagehelper.PageInfo;
import com.spider.mapper.TaskMainConfigMapper;
import com.spider.pojo.entity.TaskMainConfig;
import com.spider.pojo.entity.TaskMainConfig;
import com.spider.pojo.req.AddTaskMainConfigReq;
import com.spider.pojo.req.GetTaskMainConfigListReq;
import com.spider.pojo.req.UpdateTaskMainConfigByIdReq;
import com.spider.service.TaskMainConfigService;
import com.spider.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TaskMainConfigServiceImpl implements TaskMainConfigService {

    @Autowired
    private TaskMainConfigMapper taskMainConfigMapper;

    @Override
    public boolean addTaskMainConfig(AddTaskMainConfigReq req) {
        return taskMainConfigMapper.addTaskMainConfig(req) > 0;
    }

    @Override
    public boolean deleteTaskMainConfigById(Integer id) {
        return taskMainConfigMapper.deleteTaskMainConfigById(id) > 0;
    }

    @Override
    public boolean updateTaskMainConfigById(Integer id, UpdateTaskMainConfigByIdReq req) {
        return taskMainConfigMapper.updateTaskMainConfigById(id, req) > 0;
    }

    @Override
    public TaskMainConfig getTaskMainConfigById(Integer id) {
        return taskMainConfigMapper.getTaskMainConfigById(id);
    }

    @Override
    public PageInfo<TaskMainConfig> getTaskMainConfigList(GetTaskMainConfigListReq req) {
        return PageHelperUtils.page(()=> taskMainConfigMapper.getTaskMainConfigList(req));
    }

}
