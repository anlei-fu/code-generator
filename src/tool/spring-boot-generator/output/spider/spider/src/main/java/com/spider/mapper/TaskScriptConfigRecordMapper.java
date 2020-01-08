package com.spider.mapper;

import com.spider.pojo.entity.TaskScriptConfig;
import com.spider.pojo.entity.TaskScriptConfigRecord;
import com.spider.pojo.params.UpdateTaskScriptConfigRecordByIdParams;
import com.spider.pojo.req.AddTaskScriptConfigRecordReq;
import com.spider.pojo.req.GetTaskScriptConfigRecordListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TaskScriptConfigRecordMapper {
        
    int addTaskScriptConfigRecord(AddTaskScriptConfigRecordReq req);
    
        int deleteTaskScriptConfigRecordById(@Params("id") Integer id);
    
        int updateTaskScriptConfigRecordById(UpdateTaskScriptConfigRecordByIdParams params);
    
        TaskScriptConfigRecord getTaskScriptConfigRecordById(@Params("id") Integer id);
    
        List<TaskScriptConfigRecord> getTaskScriptConfigRecordList(GetTaskScriptConfigRecordListReq req);
   
}