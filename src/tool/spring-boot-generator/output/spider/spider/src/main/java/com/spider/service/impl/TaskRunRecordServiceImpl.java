package com.undefined.service.impl;

import com.undefined.mapper.TaskRunRecordMapper;
import com.undefined.pojo.entity.TaskRunRecord;
import com.spider.service.TaskRunRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskRunRecordServiceImpl implements TaskRunRecordService {

    @Autowired
    private TaskRunRecordMapper taskRunRecordMapper;

    @Override
    public boolean addTaskRunRecord(AddTaskRunRecordReq req) {
        return taskRunRecordMapper.addTaskRunRecord(req) > 0;
    }


    @Override
    public boolean deleteTaskRunRecordById(Integer id) {
        return taskRunRecordMapper.deleteTaskRunRecordById(id) > 0;
    }


    @Override
    public boolean updateTaskRunRecordById(Integer id, UpdateTaskRunRecordByIdReq req) {
        return taskRunRecordMapper.updateTaskRunRecordById(id, req) > 0;
    }


    @Override
    public TaskRunRecord getTaskRunRecordById(Integer id) {
        return taskRunRecordMapper.getTaskRunRecordById(id);
    }


    @Override
    public PageInfo<TaskRunRecord> getTaskRunRecordList(GetTaskRunRecordListReq req) {
        return taskRunRecordMapper.getTaskRunRecordList(req);
    }
}
