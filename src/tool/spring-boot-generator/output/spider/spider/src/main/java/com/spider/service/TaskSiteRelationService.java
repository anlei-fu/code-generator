package com.undefined.service;

import com.undefined.pojo.entity.TaskSiteRelation;

public interface TaskSiteRelationService {

    boolean addTaskSiteRelation(AddTaskSiteRelationReq req);

    boolean deleteTaskSiteRelationById(Integer id);

    boolean updateTaskSiteRelationById(Integer id, UpdateTaskSiteRelationByIdReq req);

    TaskSiteRelation getTaskSiteRelationById(Integer id);

    PageInfo<TaskSiteRelation> getTaskSiteRelationList(GetTaskSiteRelationListReq req);
}