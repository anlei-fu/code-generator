package com.spider.mapper;

import com.spider.pojo.dao.UserInfoDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserInfoMapper {

    int add(UserInfoDao dao);

    int deleteById(@Param("id") Integer id);

    int update(UserInfoDao dao);
    
    UserInfoDao findById(@Param("id") Integer id);
}