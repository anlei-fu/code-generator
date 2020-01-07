package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.TaskRunRecord;
import com.spider.pojo.req.AddTaskRunRecordReq;
import com.spider.pojo.req.GetTaskRunRecordListReq;
import com.spider.pojo.req.UpdateTaskRunRecordByIdReq;


public interface TaskRunRecordService {

    boolean addTaskRunRecord(AddTaskRunRecordReq req);
    
    boolean deleteTaskRunRecordById(Integer id);
    
    boolean updateTaskRunRecordById(Integer id, UpdateTaskRunRecordByIdReq req);
    
    TaskRunRecord getTaskRunRecordById(Integer id);
    
    PageInfo<TaskRunRecord> getTaskRunRecordList(GetTaskRunRecordListReq req);

}