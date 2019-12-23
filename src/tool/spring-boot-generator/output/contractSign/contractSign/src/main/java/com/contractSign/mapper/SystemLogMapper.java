package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addSystemLog(@Params("req") AddSystemLogReq req);
        int deleteSystemLogById(Integer id);
        int updateSystemLogById(@Params("id") Integer id, @Params("req") UpdateSystemLogByIdReq req);
        SystemLog getSystemLogById(Integer id);
        List<SystemLog> getSystemLogList(@Params("req") GetSystemLogListReq req);
       
}