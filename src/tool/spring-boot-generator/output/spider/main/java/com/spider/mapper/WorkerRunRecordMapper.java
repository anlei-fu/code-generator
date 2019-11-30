package com.spider.mapper;

import com.spider.pojo.dao.WorkerRunRecordDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface WorkerRunRecordMapper {

    int add(WorkerRunRecordDao dao);

    int deleteById(@Param("id") Integer id);

    int update(WorkerRunRecordDao dao);
    
    WorkerRunRecordDao findById(@Param("id") Integer id);
}