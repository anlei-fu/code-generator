package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.TaskCookieConfig;
import com.spider.pojo.req.AddTaskCookieConfigReq;
import com.spider.pojo.req.GetTaskCookieConfigListReq;
import com.spider.pojo.req.UpdateTaskCookieConfigByIdReq;


public interface TaskCookieConfigService {

    boolean addTaskCookieConfig(AddTaskCookieConfigReq req);
    
    boolean deleteTaskCookieConfigById(Integer id);
    
    boolean updateTaskCookieConfigById(Integer id, UpdateTaskCookieConfigByIdReq req);
    
    TaskCookieConfig getTaskCookieConfigById(Integer id);
    
    PageInfo<TaskCookieConfig> getTaskCookieConfigList(GetTaskCookieConfigListReq req);

}