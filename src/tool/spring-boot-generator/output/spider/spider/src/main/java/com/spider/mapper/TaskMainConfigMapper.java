package com.undefined.mapper;

import com.undefined.pojo.entity.TaskMainConfig;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskMainConfigMapper {
        
    int addTaskMainConfig(AddTaskMainConfigReq req);
    
    int deleteTaskMainConfigById(Integer id);
    
    int updateTaskMainConfigById(@Params("id") Integer id, @Params("req") UpdateTaskMainConfigByIdReq req);
    
    TaskMainConfig getTaskMainConfigById(Integer id);
    
    List<TaskMainConfig> getTaskMainConfigList(GetTaskMainConfigListReq req);   
}