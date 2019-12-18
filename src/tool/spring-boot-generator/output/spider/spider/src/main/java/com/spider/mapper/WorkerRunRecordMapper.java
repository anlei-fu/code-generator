package com.undefined.mapper;

import com.undefined.pojo.entity.WorkerRunRecord;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface WorkerRunRecordMapper {
        
    int addWorkerRunRecord(AddWorkerRunRecordReq req);
    
    int deleteWorkerRunRecordById(Integer id);
    
    int updateWorkerRunRecordById(@Params("id") Integer id, @Params("req") UpdateWorkerRunRecordByIdReq req);
    
    WorkerRunRecord getWorkerRunRecordById(Integer id);
    
    List<WorkerRunRecord> getWorkerRunRecordList(GetWorkerRunRecordListReq req);   
}