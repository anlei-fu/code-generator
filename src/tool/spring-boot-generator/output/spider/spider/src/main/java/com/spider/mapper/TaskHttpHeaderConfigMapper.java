package com.spider.mapper;

import com.spider.pojo.entity.TaskHttpHeaderConfig;
import com.spider.pojo.params.UpdateTaskHttpHeaderConfigByIdParams;
import com.spider.pojo.req.AddTaskHttpHeaderConfigReq;
import com.spider.pojo.req.GetTaskHttpHeaderConfigListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TaskHttpHeaderConfigMapper {
        
    int addTaskHttpHeaderConfig(AddTaskHttpHeaderConfigReq req);
    
        int deleteTaskHttpHeaderConfigById(@Params("id") Integer id);
    
        int updateTaskHttpHeaderConfigById(UpdateTaskHttpHeaderConfigByIdParams params);
    
        TaskHttpHeaderConfig getTaskHttpHeaderConfigById(@Params("id") Integer id);
    
        List<TaskHttpHeaderConfig> getTaskHttpHeaderConfigList(GetTaskHttpHeaderConfigListReq req);
   
}