package com.spider.mapper;

import com.spider.pojo.entity.TaskCookieConfig;
import com.spider.pojo.params.UpdateTaskCookieConfigByIdParams;
import com.spider.pojo.req.AddTaskCookieConfigReq;
import com.spider.pojo.req.GetTaskCookieConfigListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TaskCookieConfigMapper {
        
    int addTaskCookieConfig(AddTaskCookieConfigReq req);
    
        int deleteTaskCookieConfigById(@Params("id") Integer id);
    
        int updateTaskCookieConfigById(UpdateTaskCookieConfigByIdParams params);
    
        TaskCookieConfig getTaskCookieConfigById(@Params("id") Integer id);
    
        List<TaskCookieConfig> getTaskCookieConfigList(GetTaskCookieConfigListReq req);
   
}