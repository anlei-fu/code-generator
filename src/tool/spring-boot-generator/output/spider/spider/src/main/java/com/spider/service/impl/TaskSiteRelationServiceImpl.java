package com.spider.service.impl;

import com.github.pagehelper.PageInfo;
import com.spider.mapper.TaskSiteRelationMapper;
import com.spider.pojo.entity.TaskSiteRelation;
import com.spider.pojo.entity.TaskSiteRelation;
import com.spider.pojo.req.AddTaskSiteRelationReq;
import com.spider.pojo.req.GetTaskSiteRelationListReq;
import com.spider.pojo.req.UpdateTaskSiteRelationByIdReq;
import com.spider.service.TaskSiteRelationService;
import com.spider.utils.PageHelperUtils;
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
