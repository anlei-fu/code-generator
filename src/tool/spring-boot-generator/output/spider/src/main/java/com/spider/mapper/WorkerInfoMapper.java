package com.spider.mapper;

import com.spider.pojo.entity.WorkerInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface WorkerInfoMapper {
        
    GetWorkerInfoByIdResp getWorkerInfoById(@Params("id") Integer id, @Params("req") GetWorkerInfoByIdReq req);
        int deleteWorkerInfoById(@Params("id") Integer id);
        List<WorkerInfo> getWorkerInfoByIp(@Params("ip") String ip);
       
}