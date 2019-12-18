package com.undefined.service;

import com.undefined.pojo.entity.TaskScriptConfig;

public interface TaskScriptConfigService {

    boolean addTaskScriptConfig(AddTaskScriptConfigReq req);

    boolean deleteTaskScriptConfigById(Integer id);

    boolean updateTaskScriptConfigById(Integer id, UpdateTaskScriptConfigByIdReq req);

    TaskScriptConfig getTaskScriptConfigById(Integer id);

    PageInfo<TaskScriptConfig> getTaskScriptConfigList(GetTaskScriptConfigListReq req);
}