package com.spider.mapper;

import com.spider.pojo.dao.WorkerInfoDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface WorkerInfoMapper {

    int add(WorkerInfoDao dao);

    int deleteById(@Param("id") Integer id);

    int update(WorkerInfoDao dao);
    
    WorkerInfoDao findById(@Param("id") Integer id);
}