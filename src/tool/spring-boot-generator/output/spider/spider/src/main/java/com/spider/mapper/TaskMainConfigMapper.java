package com.spider.mapper;

import com.spider.pojo.entity.TaskMainConfig;
import com.spider.pojo.req.AddTaskMainConfigReq;
import com.spider.pojo.req.GetTaskMainConfigListReq;
import com.spider.pojo.req.UpdateTaskMainConfigByIdReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TaskMainConfigMapper {
        
    int addTaskMainConfig(AddTaskMainConfigReq req);
    
        int deleteTaskMainConfigById(@Params("id") Integer id);
    
        int updateTaskMainConfigById(@Params("id") Integer id, @Params("req") UpdateTaskMainConfigByIdReq req);
    
        TaskMainConfig getTaskMainConfigById(@Params("id") Integer id);
    
        List<TaskMainConfig> getTaskMainConfigList(GetTaskMainConfigListReq req);
   
}