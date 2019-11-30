package com.spider.mapper;

import com.spider.pojo.dao.TaskInfoDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TaskInfoMapper {

    int add(TaskInfoDao dao);

    int deleteById(@Param("id") Integer id);

    int update(TaskInfoDao dao);
    
    TaskInfoDao findById(@Param("id") Integer id);
}