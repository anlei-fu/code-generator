package com.spider.mapper;

import com.spider.pojo.entity.TaskScriptConfig;
import com.spider.pojo.params.UpdateTaskScriptConfigByIdParams;
import com.spider.pojo.req.AddTaskScriptConfigReq;
import com.spider.pojo.req.GetTaskScriptConfigListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TaskScriptConfigMapper {
        
    int addTaskScriptConfig(AddTaskScriptConfigReq req);
    
        int deleteTaskScriptConfigById(@Params("id") Integer id);
    
        int updateTaskScriptConfigById(UpdateTaskScriptConfigByIdParams params);
    
        TaskScriptConfig getTaskScriptConfigById(@Params("id") Integer id);
    
        List<TaskScriptConfig> getTaskScriptConfigList(GetTaskScriptConfigListReq req);
   
}