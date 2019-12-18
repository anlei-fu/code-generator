package com.undefined.mapper;

import com.undefined.pojo.entity.TaskScriptConfigRecord;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskScriptConfigRecordMapper {
        
    int addTaskScriptConfigRecord(AddTaskScriptConfigRecordReq req);
    
    int deleteTaskScriptConfigRecordById(Integer id);
    
    int updateTaskScriptConfigRecordById(@Params("id") Integer id, @Params("req") UpdateTaskScriptConfigRecordByIdReq req);
    
    TaskScriptConfigRecord getTaskScriptConfigRecordById(Integer id);
    
    List<TaskScriptConfigRecord> getTaskScriptConfigRecordList(GetTaskScriptConfigRecordListReq req);   
}