package com.undefined.service;

import com.undefined.pojo.entity.TaskHttpHeaderConfig;

public interface TaskHttpHeaderConfigService {

    boolean addTaskHttpHeaderConfig(AddTaskHttpHeaderConfigReq req);

    boolean deleteTaskHttpHeaderConfigById(Integer id);

    boolean updateTaskHttpHeaderConfigById(Integer id, UpdateTaskHttpHeaderConfigByIdReq req);

    TaskHttpHeaderConfig getTaskHttpHeaderConfigById(Integer id);

    PageInfo<TaskHttpHeaderConfig> getTaskHttpHeaderConfigList(GetTaskHttpHeaderConfigListReq req);
}