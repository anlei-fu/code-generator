package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.TaskMainConfig;
import com.spider.pojo.req.AddTaskMainConfigReq;
import com.spider.pojo.req.GetTaskMainConfigListReq;
import com.spider.pojo.req.UpdateTaskMainConfigByIdReq;


public interface TaskMainConfigService {

    boolean addTaskMainConfig(AddTaskMainConfigReq req);
    
    boolean deleteTaskMainConfigById(Integer id);
    
    boolean updateTaskMainConfigById(Integer id, UpdateTaskMainConfigByIdReq req);
    
    TaskMainConfig getTaskMainConfigById(Integer id);
    
    PageInfo<TaskMainConfig> getTaskMainConfigList(GetTaskMainConfigListReq req);

}