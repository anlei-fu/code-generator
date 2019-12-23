package com.spider.mapper;

import com.spider.pojo.entity.TaskHttpHeaderConfig;
import com.spider.pojo.req.AddTaskHttpHeaderConfigReq;
import com.spider.pojo.req.GetTaskHttpHeaderConfigListReq;
import com.spider.pojo.req.UpdateTaskHttpHeaderConfigByIdReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TaskHttpHeaderConfigMapper {
        
    int addTaskHttpHeaderConfig(AddTaskHttpHeaderConfigReq req);
    
        int deleteTaskHttpHeaderConfigById(@Params("id") Integer id);
    
        int updateTaskHttpHeaderConfigById(@Params("id") Integer id, @Params("req") UpdateTaskHttpHeaderConfigByIdReq req);
    
        TaskHttpHeaderConfig getTaskHttpHeaderConfigById(@Params("id") Integer id);
    
        List<TaskHttpHeaderConfig> getTaskHttpHeaderConfigList(GetTaskHttpHeaderConfigListReq req);
   
}