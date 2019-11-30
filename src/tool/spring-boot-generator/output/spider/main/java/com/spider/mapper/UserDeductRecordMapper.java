package com.spider.mapper;

import com.spider.pojo.dao.UserDeductRecordDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserDeductRecordMapper {

    int add(UserDeductRecordDao dao);

    int deleteById(@Param("id") Integer id);

    int update(UserDeductRecordDao dao);
    
    UserDeductRecordDao findById(@Param("id") Integer id);
}