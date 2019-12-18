package com.undefined.mapper;

import com.undefined.pojo.entity.TaskCookieConfig;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskCookieConfigMapper {
        
    int addTaskCookieConfig(AddTaskCookieConfigReq req);
    
    int deleteTaskCookieConfigById(Integer id);
    
    int updateTaskCookieConfigById(@Params("id") Integer id, @Params("req") UpdateTaskCookieConfigByIdReq req);
    
    TaskCookieConfig getTaskCookieConfigById(Integer id);
    
    List<TaskCookieConfig> getTaskCookieConfigList(GetTaskCookieConfigListReq req);   
}