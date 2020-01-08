package com.spider.mapper;

import com.spider.pojo.entity.TaskMainConfig;
import com.spider.pojo.params.UpdateTaskMainConfigByIdParams;
import com.spider.pojo.req.AddTaskMainConfigReq;
import com.spider.pojo.req.GetTaskMainConfigListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TaskMainConfigMapper {
        
    int addTaskMainConfig(AddTaskMainConfigReq req);
    
        int deleteTaskMainConfigById(@Params("id") Integer id);
    
        int updateTaskMainConfigById(UpdateTaskMainConfigByIdParams params);
    
        TaskMainConfig getTaskMainConfigById(@Params("id") Integer id);
    
        List<TaskMainConfig> getTaskMainConfigList(GetTaskMainConfigListReq req);
   
}