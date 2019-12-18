package com.undefined.service;

import com.undefined.pojo.entity.TaskScriptConfigRecord;

public interface TaskScriptConfigRecordService {

    boolean addTaskScriptConfigRecord(AddTaskScriptConfigRecordReq req);

    boolean deleteTaskScriptConfigRecordById(Integer id);

    boolean updateTaskScriptConfigRecordById(Integer id, UpdateTaskScriptConfigRecordByIdReq req);

    TaskScriptConfigRecord getTaskScriptConfigRecordById(Integer id);

    PageInfo<TaskScriptConfigRecord> getTaskScriptConfigRecordList(GetTaskScriptConfigRecordListReq req);
}