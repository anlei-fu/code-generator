package com.spider.mapper;

import com.spider.pojo.entity.WorkerInfo;
import com.spider.pojo.req.AddWorkerInfoReq;
import com.spider.pojo.req.GetWorkerInfoListReq;
import com.spider.pojo.req.UpdateWorkerInfoByIdReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface WorkerInfoMapper {
        
    int addWorkerInfo(AddWorkerInfoReq req);
    
        int deleteWorkerInfoById(@Params("id") Integer id);
    
        int updateWorkerInfoById(@Params("id") Integer id, @Params("req") UpdateWorkerInfoByIdReq req);
    
        WorkerInfo getWorkerInfoById(@Params("id") Integer id);
    
        List<WorkerInfo> getWorkerInfoList(GetWorkerInfoListReq req);
   
}