package com.undefined.service;

import com.undefined.pojo.entity.TaskCookieConfig;

public interface TaskCookieConfigService {

    boolean addTaskCookieConfig(AddTaskCookieConfigReq req);

    boolean deleteTaskCookieConfigById(Integer id);

    boolean updateTaskCookieConfigById(Integer id, UpdateTaskCookieConfigByIdReq req);

    TaskCookieConfig getTaskCookieConfigById(Integer id);

    PageInfo<TaskCookieConfig> getTaskCookieConfigList(GetTaskCookieConfigListReq req);
}