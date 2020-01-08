package com.spider.service.impl;

import com.github.pagehelper.PageInfo;
import com.spider.mapper.TaskScriptConfigRecordMapper;
import com.spider.pojo.entity.TaskScriptConfigRecord;
import com.spider.pojo.entity.TaskScriptConfig;
import com.spider.pojo.entity.TaskScriptConfigRecord;
import com.spider.pojo.req.AddTaskScriptConfigRecordReq;
import com.spider.pojo.req.GetTaskScriptConfigRecordListReq;
import com.spider.pojo.req.UpdateTaskScriptConfigRecordByIdReq;
import com.spider.service.TaskScriptConfigRecordService;
import com.spider.utils.PageHelperUtils;
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
        params params = new UpdateTaskScriptConfigRecordByIdParams(id, req)
        return taskScriptConfigRecordMapper.updateTaskScriptConfigRecordById(params) > 0;
    }

    @Override
    public TaskScriptConfigRecord getTaskScriptConfigRecordById(Integer id) {
        return taskScriptConfigRecordMapper.getTaskScriptConfigRecordById(id);
    }

    @Override
    public PageInfo<TaskScriptConfigRecord> getTaskScriptConfigRecordList(GetTaskScriptConfigRecordListReq req) {
        return PageHelperUtils.page(()=> taskScriptConfigRecordMapper.getTaskScriptConfigRecordList(req));
    }

}
