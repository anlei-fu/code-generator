package com.undefined.mapper;

import com.undefined.pojo.entity.TaskSiteRelation;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskSiteRelationMapper {
        
    int addTaskSiteRelation(AddTaskSiteRelationReq req);
    
    int deleteTaskSiteRelationById(Integer id);
    
    int updateTaskSiteRelationById(@Params("id") Integer id, @Params("req") UpdateTaskSiteRelationByIdReq req);
    
    TaskSiteRelation getTaskSiteRelationById(Integer id);
    
    List<TaskSiteRelation> getTaskSiteRelationList(GetTaskSiteRelationListReq req);   
}