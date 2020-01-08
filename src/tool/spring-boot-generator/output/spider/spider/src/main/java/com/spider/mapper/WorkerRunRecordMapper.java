package com.spider.mapper;

import com.spider.pojo.entity.WorkerRunRecord;
import com.spider.pojo.params.UpdateWorkerRunRecordByIdParams;
import com.spider.pojo.req.AddWorkerRunRecordReq;
import com.spider.pojo.req.GetWorkerRunRecordListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface WorkerRunRecordMapper {
        
    int addWorkerRunRecord(AddWorkerRunRecordReq req);
    
        int deleteWorkerRunRecordById(@Params("id") Integer id);
    
        int updateWorkerRunRecordById(UpdateWorkerRunRecordByIdParams params);
    
        WorkerRunRecord getWorkerRunRecordById(@Params("id") Integer id);
    
        List<WorkerRunRecord> getWorkerRunRecordList(GetWorkerRunRecordListReq req);
   
}