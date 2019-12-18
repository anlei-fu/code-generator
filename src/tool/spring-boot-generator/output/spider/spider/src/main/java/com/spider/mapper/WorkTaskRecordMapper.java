package com.undefined.mapper;

import com.undefined.pojo.entity.WorkTaskRecord;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface WorkTaskRecordMapper {
        
    int addWorkTaskRecord(AddWorkTaskRecordReq req);
    
    int deleteWorkTaskRecordById(Integer id);
    
    int updateWorkTaskRecordById(@Params("id") Integer id, @Params("req") UpdateWorkTaskRecordByIdReq req);
    
    WorkTaskRecord getWorkTaskRecordById(Integer id);
    
    List<WorkTaskRecord> getWorkTaskRecordList(GetWorkTaskRecordListReq req);   
}