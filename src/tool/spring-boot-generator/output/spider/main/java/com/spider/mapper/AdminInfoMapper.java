package com.spider.mapper;

import com.spider.pojo.dao.AdminInfoDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface AdminInfoMapper {

    int add(AdminInfoDao dao);

    int deleteById(@Param("id") Integer id);

    int update(AdminInfoDao dao);
    
    AdminInfoDao findById(@Param("id") Integer id);
}