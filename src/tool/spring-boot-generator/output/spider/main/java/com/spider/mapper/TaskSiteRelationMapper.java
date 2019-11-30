package com.spider.mapper;

import com.spider.pojo.dao.TaskSiteRelationDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskSiteRelationMapper {

    int add(TaskSiteRelationDao dao);

    int deleteById(@Param("id") Integer id);

    int update(TaskSiteRelationDao dao);
    
    TaskSiteRelationDao findById(@Param("id") Integer id);
}