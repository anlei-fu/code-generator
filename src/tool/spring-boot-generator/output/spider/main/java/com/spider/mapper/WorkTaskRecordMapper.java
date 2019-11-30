package com.spider.mapper;

import com.spider.pojo.dao.WorkTaskRecordDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface WorkTaskRecordMapper {

    int add(WorkTaskRecordDao dao);

    int deleteById(@Param("id") Integer id);

    int update(WorkTaskRecordDao dao);
    
    WorkTaskRecordDao findById(@Param("id") Integer id);
}