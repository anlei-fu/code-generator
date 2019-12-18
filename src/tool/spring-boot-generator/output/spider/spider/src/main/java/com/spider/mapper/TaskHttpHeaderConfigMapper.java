package com.undefined.mapper;

import com.undefined.pojo.entity.TaskHttpHeaderConfig;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskHttpHeaderConfigMapper {
        
    int addTaskHttpHeaderConfig(AddTaskHttpHeaderConfigReq req);
    
    int deleteTaskHttpHeaderConfigById(Integer id);
    
    int updateTaskHttpHeaderConfigById(@Params("id") Integer id, @Params("req") UpdateTaskHttpHeaderConfigByIdReq req);
    
    TaskHttpHeaderConfig getTaskHttpHeaderConfigById(Integer id);
    
    List<TaskHttpHeaderConfig> getTaskHttpHeaderConfigList(GetTaskHttpHeaderConfigListReq req);   
}