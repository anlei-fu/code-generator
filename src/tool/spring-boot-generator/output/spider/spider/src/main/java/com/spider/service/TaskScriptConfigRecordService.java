package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.TaskScriptConfig;
import com.spider.pojo.entity.TaskScriptConfigRecord;
import com.spider.pojo.req.AddTaskScriptConfigRecordReq;
import com.spider.pojo.req.GetTaskScriptConfigRecordListReq;
import com.spider.pojo.req.UpdateTaskScriptConfigRecordByIdReq;


public interface TaskScriptConfigRecordService {

    boolean addTaskScriptConfigRecord(AddTaskScriptConfigRecordReq req);
    
    boolean deleteTaskScriptConfigRecordById(Integer id);
    
    boolean updateTaskScriptConfigRecordById(Integer id, UpdateTaskScriptConfigRecordByIdReq req);
    
    TaskScriptConfigRecord getTaskScriptConfigRecordById(Integer id);
    
    PageInfo<TaskScriptConfigRecord> getTaskScriptConfigRecordList(GetTaskScriptConfigRecordListReq req);

}