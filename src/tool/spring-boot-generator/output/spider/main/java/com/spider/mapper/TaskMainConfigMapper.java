package com.spider.mapper;

import com.spider.pojo.dao.TaskMainConfigDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskMainConfigMapper {

    int add(TaskMainConfigDao dao);

    int deleteById(@Param("id") Integer id);

    int update(TaskMainConfigDao dao);
    
    TaskMainConfigDao findById(@Param("id") Integer id);
}