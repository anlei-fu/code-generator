package com.undefined.mapper;

import com.undefined.pojo.entity.WorkerInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface WorkerInfoMapper {
        
    int addWorkerInfo(AddWorkerInfoReq req);
    
    int deleteWorkerInfoById(Integer id);
    
    int updateWorkerInfoById(@Params("id") Integer id, @Params("req") UpdateWorkerInfoByIdReq req);
    
    WorkerInfo getWorkerInfoById(Integer id);
    
    List<WorkerInfo> getWorkerInfoList(GetWorkerInfoListReq req);   
}