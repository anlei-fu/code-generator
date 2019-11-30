package com.spider.mapper;

import com.spider.pojo.dao.UserWalletDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserWalletMapper {

    int add(UserWalletDao dao);

    int deleteById(@Param("id") Integer id);

    int update(UserWalletDao dao);
    
    UserWalletDao findById(@Param("id") Integer id);
}