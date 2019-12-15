package com.@project.mapper;

import com.@project.pojo.dao.WorkerInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface WorkerInfoMapper {
        
    GetByIdResp GetById(@Params("id") Integer id);
       
}