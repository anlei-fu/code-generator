package com.spider.service.impl;

import com.github.pagehelper.PageInfo;
import com.spider.mapper.TaskRunRecordMapper;
import com.spider.pojo.entity.TaskRunRecord;
import com.spider.pojo.entity.TaskRunRecord;
import com.spider.pojo.req.AddTaskRunRecordReq;
import com.spider.pojo.req.GetTaskRunRecordListReq;
import com.spider.pojo.req.UpdateTaskRunRecordByIdReq;
import com.spider.service.TaskRunRecordService;
import com.spider.utils.PageHelperUtils;
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
        params params = new UpdateTaskRunRecordByIdParams(id, req)
        return taskRunRecordMapper.updateTaskRunRecordById(params) > 0;
    }

    @Override
    public TaskRunRecord getTaskRunRecordById(Integer id) {
        return taskRunRecordMapper.getTaskRunRecordById(id);
    }

    @Override
    public PageInfo<TaskRunRecord> getTaskRunRecordList(GetTaskRunRecordListReq req) {
        return PageHelperUtils.page(()=> taskRunRecordMapper.getTaskRunRecordList(req));
    }

}
