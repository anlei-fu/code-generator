package com.spider.mapper;

import com.spider.pojo.dao.TaskScriptConfigDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskScriptConfigMapper {

    int add(TaskScriptConfigDao dao);

    int deleteById(@Param("id") Integer id);

    int update(TaskScriptConfigDao dao);
    
    TaskScriptConfigDao findById(@Param("id") Integer id);
}