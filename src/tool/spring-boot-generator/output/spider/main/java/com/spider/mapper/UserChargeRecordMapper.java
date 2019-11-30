package com.spider.mapper;

import com.spider.pojo.dao.UserChargeRecordDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserChargeRecordMapper {

    int add(UserChargeRecordDao dao);

    int deleteById(@Param("id") Integer id);

    int update(UserChargeRecordDao dao);
    
    UserChargeRecordDao findById(@Param("id") Integer id);
}