package com.spider.mapper;

import com.spider.pojo.dao.TaskCookieConfigDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskCookieConfigMapper {

    int add(TaskCookieConfigDao dao);

    int deleteById(@Param("id") Integer id);

    int update(TaskCookieConfigDao dao);
    
    TaskCookieConfigDao findById(@Param("id") Integer id);
}