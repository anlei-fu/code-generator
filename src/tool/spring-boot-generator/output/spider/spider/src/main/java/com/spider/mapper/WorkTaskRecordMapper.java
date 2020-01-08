package com.spider.mapper;

import com.spider.pojo.entity.WorkTaskRecord;
import com.spider.pojo.params.UpdateWorkTaskRecordByIdParams;
import com.spider.pojo.req.AddWorkTaskRecordReq;
import com.spider.pojo.req.GetWorkTaskRecordListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface WorkTaskRecordMapper {
        
    int addWorkTaskRecord(AddWorkTaskRecordReq req);
    
        int deleteWorkTaskRecordById(@Params("id") Integer id);
    
        int updateWorkTaskRecordById(UpdateWorkTaskRecordByIdParams params);
    
        WorkTaskRecord getWorkTaskRecordById(@Params("id") Integer id);
    
        List<WorkTaskRecord> getWorkTaskRecordList(GetWorkTaskRecordListReq req);
   
}