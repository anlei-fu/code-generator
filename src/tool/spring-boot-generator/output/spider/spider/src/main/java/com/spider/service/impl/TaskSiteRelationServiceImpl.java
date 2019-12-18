package com.undefined.service.impl;

import com.undefined.mapper.TaskSiteRelationMapper;
import com.undefined.pojo.entity.TaskSiteRelation;
import com.spider.service.TaskSiteRelationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskSiteRelationServiceImpl implements TaskSiteRelationService {

    @Autowired
    private TaskSiteRelationMapper taskSiteRelationMapper;

    @Override
    public boolean addTaskSiteRelation(AddTaskSiteRelationReq req) {
        return taskSiteRelationMapper.addTaskSiteRelation(req) > 0;
    }


    @Override
    public boolean deleteTaskSiteRelationById(Integer id) {
        return taskSiteRelationMapper.deleteTaskSiteRelationById(id) > 0;
    }


    @Override
    public boolean updateTaskSiteRelationById(Integer id, UpdateTaskSiteRelationByIdReq req) {
        return taskSiteRelationMapper.updateTaskSiteRelationById(id, req) > 0;
    }


    @Override
    public TaskSiteRelation getTaskSiteRelationById(Integer id) {
        return taskSiteRelationMapper.getTaskSiteRelationById(id);
    }


    @Override
    public PageInfo<TaskSiteRelation> getTaskSiteRelationList(GetTaskSiteRelationListReq req) {
        return taskSiteRelationMapper.getTaskSiteRelationList(req);
    }
}
