package com.spider.mapper;

import com.spider.pojo.dao.TaskScriptConfigRecordDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskScriptConfigRecordMapper {

    int add(TaskScriptConfigRecordDao dao);

    int deleteById(@Param("id") Integer id);

    int update(TaskScriptConfigRecordDao dao);
    
    TaskScriptConfigRecordDao findById(@Param("id") Integer id);
}