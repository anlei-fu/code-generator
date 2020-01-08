package com.spider.mapper;

import com.spider.pojo.entity.TaskRunRecord;
import com.spider.pojo.params.UpdateTaskRunRecordByIdParams;
import com.spider.pojo.req.AddTaskRunRecordReq;
import com.spider.pojo.req.GetTaskRunRecordListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TaskRunRecordMapper {
        
    int addTaskRunRecord(AddTaskRunRecordReq req);
    
        int deleteTaskRunRecordById(@Params("id") Integer id);
    
        int updateTaskRunRecordById(UpdateTaskRunRecordByIdParams params);
    
        TaskRunRecord getTaskRunRecordById(@Params("id") Integer id);
    
        List<TaskRunRecord> getTaskRunRecordList(GetTaskRunRecordListReq req);
   
}