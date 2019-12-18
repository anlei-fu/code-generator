package com.undefined.mapper;

import com.undefined.pojo.entity.TaskInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskInfoMapper {
        
    int addTaskInfo(AddTaskInfoReq req);
    
    int deleteTaskInfoById(Integer id);
    
    int updateTaskInfoById(@Params("id") Integer id, @Params("req") UpdateTaskInfoByIdReq req);
    
    TaskInfo getTaskInfoById(Integer id);
    
    List<TaskInfo> getTaskInfoList(GetTaskInfoListReq req);   
}