package com.spider.mapper;

import com.spider.pojo.dao.TaskHttpHeaderConfigDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskHttpHeaderConfigMapper {

    int add(TaskHttpHeaderConfigDao dao);

    int deleteById(@Param("id") Integer id);

    int update(TaskHttpHeaderConfigDao dao);
    
    TaskHttpHeaderConfigDao findById(@Param("id") Integer id);
}