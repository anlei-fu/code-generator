package com.undefined.mapper;

import com.undefined.pojo.entity.TaskScriptConfig;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskScriptConfigMapper {
        
    int addTaskScriptConfig(AddTaskScriptConfigReq req);
    
    int deleteTaskScriptConfigById(Integer id);
    
    int updateTaskScriptConfigById(@Params("id") Integer id, @Params("req") UpdateTaskScriptConfigByIdReq req);
    
    TaskScriptConfig getTaskScriptConfigById(Integer id);
    
    List<TaskScriptConfig> getTaskScriptConfigList(GetTaskScriptConfigListReq req);   
}