package com.spider.service.impl;

import com.github.pagehelper.PageInfo;
import com.spider.mapper.TaskInfoMapper;
import com.spider.pojo.entity.TaskInfo;
import com.spider.pojo.entity.TaskInfo;
import com.spider.pojo.req.AddTaskInfoReq;
import com.spider.pojo.req.GetTaskInfoListReq;
import com.spider.pojo.req.UpdateTaskInfoByIdReq;
import com.spider.service.TaskInfoService;
import com.spider.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TaskInfoServiceImpl implements TaskInfoService {

    @Autowired
    private TaskInfoMapper taskInfoMapper;

    @Override
    public boolean addTaskInfo(AddTaskInfoReq req) {
        return taskInfoMapper.addTaskInfo(req) > 0;
    }

    @Override
    public boolean deleteTaskInfoById(Integer id) {
        return taskInfoMapper.deleteTaskInfoById(id) > 0;
    }

    @Override
    public boolean updateTaskInfoById(Integer id, UpdateTaskInfoByIdReq req) {
        return taskInfoMapper.updateTaskInfoById(id, req) > 0;
    }

    @Override
    public TaskInfo getTaskInfoById(Integer id) {
        return taskInfoMapper.getTaskInfoById(id);
    }

    @Override
    public PageInfo<TaskInfo> getTaskInfoList(GetTaskInfoListReq req) {
        return taskInfoMapper.getTaskInfoList(req);
    }

}
