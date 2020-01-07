package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.TaskScriptConfig;
import com.spider.pojo.req.AddTaskScriptConfigReq;
import com.spider.pojo.req.GetTaskScriptConfigListReq;
import com.spider.pojo.req.UpdateTaskScriptConfigByIdReq;


public interface TaskScriptConfigService {

    boolean addTaskScriptConfig(AddTaskScriptConfigReq req);
    
    boolean deleteTaskScriptConfigById(Integer id);
    
    boolean updateTaskScriptConfigById(Integer id, UpdateTaskScriptConfigByIdReq req);
    
    TaskScriptConfig getTaskScriptConfigById(Integer id);
    
    PageInfo<TaskScriptConfig> getTaskScriptConfigList(GetTaskScriptConfigListReq req);

}