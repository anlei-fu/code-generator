package com.spider.mapper;

import com.spider.pojo.entity.TaskSiteRelation;
import com.spider.pojo.req.AddTaskSiteRelationReq;
import com.spider.pojo.req.GetTaskSiteRelationListReq;
import com.spider.pojo.req.UpdateTaskSiteRelationByIdReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TaskSiteRelationMapper {
        
    int addTaskSiteRelation(AddTaskSiteRelationReq req);
    
        int deleteTaskSiteRelationById(@Params("id") Integer id);
    
        int updateTaskSiteRelationById(@Params("id") Integer id, @Params("req") UpdateTaskSiteRelationByIdReq req);
    
        TaskSiteRelation getTaskSiteRelationById(@Params("id") Integer id);
    
        List<TaskSiteRelation> getTaskSiteRelationList(GetTaskSiteRelationListReq req);
   
}