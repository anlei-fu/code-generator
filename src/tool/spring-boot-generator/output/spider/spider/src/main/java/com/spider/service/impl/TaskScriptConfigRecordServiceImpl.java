package com.undefined.service.impl;

import com.undefined.mapper.TaskScriptConfigRecordMapper;
import com.undefined.pojo.entity.TaskScriptConfigRecord;
import com.spider.service.TaskScriptConfigRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskScriptConfigRecordServiceImpl implements TaskScriptConfigRecordService {

    @Autowired
    private TaskScriptConfigRecordMapper taskScriptConfigRecordMapper;

    @Override
    public boolean addTaskScriptConfigRecord(AddTaskScriptConfigRecordReq req) {
        return taskScriptConfigRecordMapper.addTaskScriptConfigRecord(req) > 0;
    }


    @Override
    public boolean deleteTaskScriptConfigRecordById(Integer id) {
        return taskScriptConfigRecordMapper.deleteTaskScriptConfigRecordById(id) > 0;
    }


    @Override
    public boolean updateTaskScriptConfigRecordById(Integer id, UpdateTaskScriptConfigRecordByIdReq req) {
        return taskScriptConfigRecordMapper.updateTaskScriptConfigRecordById(id, req) > 0;
    }


    @Override
    public TaskScriptConfigRecord getTaskScriptConfigRecordById(Integer id) {
        return taskScriptConfigRecordMapper.getTaskScriptConfigRecordById(id);
    }


    @Override
    public PageInfo<TaskScriptConfigRecord> getTaskScriptConfigRecordList(GetTaskScriptConfigRecordListReq req) {
        return taskScriptConfigRecordMapper.getTaskScriptConfigRecordList(req);
    }
}
