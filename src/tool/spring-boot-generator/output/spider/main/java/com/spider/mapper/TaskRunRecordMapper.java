package com.spider.mapper;

import com.spider.pojo.dao.TaskRunRecordDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskRunRecordMapper {

    int add(TaskRunRecordDao dao);

    int deleteById(@Param("id") Integer id);

    int update(TaskRunRecordDao dao);
    
    TaskRunRecordDao findById(@Param("id") Integer id);
}