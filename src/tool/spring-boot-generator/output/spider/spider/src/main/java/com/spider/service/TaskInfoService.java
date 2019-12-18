package com.undefined.service;

import com.undefined.pojo.entity.TaskInfo;

public interface TaskInfoService {

    boolean addTaskInfo(AddTaskInfoReq req);

    boolean deleteTaskInfoById(Integer id);

    boolean updateTaskInfoById(Integer id, UpdateTaskInfoByIdReq req);

    TaskInfo getTaskInfoById(Integer id);

    PageInfo<TaskInfo> getTaskInfoList(GetTaskInfoListReq req);
}