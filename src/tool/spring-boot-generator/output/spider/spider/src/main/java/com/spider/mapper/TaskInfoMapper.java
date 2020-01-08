package com.spider.mapper;

import com.spider.pojo.entity.TaskInfo;
import com.spider.pojo.params.UpdateTaskInfoByIdParams;
import com.spider.pojo.req.AddTaskInfoReq;
import com.spider.pojo.req.GetTaskInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TaskInfoMapper {
        
    int addTaskInfo(AddTaskInfoReq req);
    
        int deleteTaskInfoById(@Params("id") Integer id);
    
        int updateTaskInfoById(UpdateTaskInfoByIdParams params);
    
        TaskInfo getTaskInfoById(@Params("id") Integer id);
    
        List<TaskInfo> getTaskInfoList(GetTaskInfoListReq req);
   
}