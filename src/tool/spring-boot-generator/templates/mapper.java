package com.@project.mapper;

import com.@project.pojo.dao.@nameDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface @nameMapper {

    int add(@nameDao dao);

    int deleteById(@Param("id") Integer id);

    int update(@nameDao dao);
    
    @nameDao findById(@Param("id") Integer id);
}