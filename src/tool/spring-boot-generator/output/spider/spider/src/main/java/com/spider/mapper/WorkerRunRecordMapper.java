package com.spider.mapper;

import com.spider.pojo.entity.WorkerRunRecord;
import com.spider.pojo.req.AddWorkerRunRecordReq;
import com.spider.pojo.req.GetWorkerRunRecordListReq;
import com.spider.pojo.req.UpdateWorkerRunRecordByIdReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface WorkerRunRecordMapper {
        
    int addWorkerRunRecord(AddWorkerRunRecordReq req);
    
        int deleteWorkerRunRecordById(@Params("id") Integer id);
    
        int updateWorkerRunRecordById(@Params("id") Integer id, @Params("req") UpdateWorkerRunRecordByIdReq req);
    
        WorkerRunRecord getWorkerRunRecordById(@Params("id") Integer id);
    
        List<WorkerRunRecord> getWorkerRunRecordList(GetWorkerRunRecordListReq req);
   
}