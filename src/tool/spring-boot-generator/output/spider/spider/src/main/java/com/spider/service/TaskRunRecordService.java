package com.undefined.service;

import com.undefined.pojo.entity.TaskRunRecord;

public interface TaskRunRecordService {

    boolean addTaskRunRecord(AddTaskRunRecordReq req);

    boolean deleteTaskRunRecordById(Integer id);

    boolean updateTaskRunRecordById(Integer id, UpdateTaskRunRecordByIdReq req);

    TaskRunRecord getTaskRunRecordById(Integer id);

    PageInfo<TaskRunRecord> getTaskRunRecordList(GetTaskRunRecordListReq req);
}