package com.undefined.service;

import com.undefined.pojo.entity.TaskMainConfig;

public interface TaskMainConfigService {

    boolean addTaskMainConfig(AddTaskMainConfigReq req);

    boolean deleteTaskMainConfigById(Integer id);

    boolean updateTaskMainConfigById(Integer id, UpdateTaskMainConfigByIdReq req);

    TaskMainConfig getTaskMainConfigById(Integer id);

    PageInfo<TaskMainConfig> getTaskMainConfigList(GetTaskMainConfigListReq req);
}