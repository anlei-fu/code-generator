package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.TaskInfo;
import com.spider.pojo.req.AddTaskInfoReq;
import com.spider.pojo.req.GetTaskInfoListReq;
import com.spider.pojo.req.UpdateTaskInfoByIdReq;


public interface TaskInfoService {

    boolean addTaskInfo(AddTaskInfoReq req);
    
    boolean deleteTaskInfoById(Integer id);
    
    boolean updateTaskInfoById(Integer id, UpdateTaskInfoByIdReq req);
    
    TaskInfo getTaskInfoById(Integer id);
    
    PageInfo<TaskInfo> getTaskInfoList(GetTaskInfoListReq req);

}