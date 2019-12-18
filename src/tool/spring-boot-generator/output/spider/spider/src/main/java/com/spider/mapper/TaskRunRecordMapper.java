package com.undefined.mapper;

import com.undefined.pojo.entity.TaskRunRecord;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskRunRecordMapper {
        
    int addTaskRunRecord(AddTaskRunRecordReq req);
    
    int deleteTaskRunRecordById(Integer id);
    
    int updateTaskRunRecordById(@Params("id") Integer id, @Params("req") UpdateTaskRunRecordByIdReq req);
    
    TaskRunRecord getTaskRunRecordById(Integer id);
    
    List<TaskRunRecord> getTaskRunRecordList(GetTaskRunRecordListReq req);   
}