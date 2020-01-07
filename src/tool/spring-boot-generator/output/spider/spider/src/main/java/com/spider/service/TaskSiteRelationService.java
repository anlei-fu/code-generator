package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.TaskSiteRelation;
import com.spider.pojo.req.AddTaskSiteRelationReq;
import com.spider.pojo.req.GetTaskSiteRelationListReq;
import com.spider.pojo.req.UpdateTaskSiteRelationByIdReq;


public interface TaskSiteRelationService {

    boolean addTaskSiteRelation(AddTaskSiteRelationReq req);
    
    boolean deleteTaskSiteRelationById(Integer id);
    
    boolean updateTaskSiteRelationById(Integer id, UpdateTaskSiteRelationByIdReq req);
    
    TaskSiteRelation getTaskSiteRelationById(Integer id);
    
    PageInfo<TaskSiteRelation> getTaskSiteRelationList(GetTaskSiteRelationListReq req);

}