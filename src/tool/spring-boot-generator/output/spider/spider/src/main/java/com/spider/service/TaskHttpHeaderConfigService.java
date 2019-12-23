package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.TaskHttpHeaderConfig;
import com.spider.pojo.req.AddTaskHttpHeaderConfigReq;
import com.spider.pojo.req.GetTaskHttpHeaderConfigListReq;
import com.spider.pojo.req.UpdateTaskHttpHeaderConfigByIdReq;


public interface TaskHttpHeaderConfigService {

    boolean addTaskHttpHeaderConfig(AddTaskHttpHeaderConfigReq req);
    
    boolean deleteTaskHttpHeaderConfigById(Integer id);
    
    boolean updateTaskHttpHeaderConfigById(Integer id, UpdateTaskHttpHeaderConfigByIdReq req);
    
    TaskHttpHeaderConfig getTaskHttpHeaderConfigById(Integer id);
    
    PageInfo<TaskHttpHeaderConfig> getTaskHttpHeaderConfigList(GetTaskHttpHeaderConfigListReq req);

}