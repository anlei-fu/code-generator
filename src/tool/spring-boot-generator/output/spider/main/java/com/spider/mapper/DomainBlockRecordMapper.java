package com.spider.mapper;

import com.spider.pojo.dao.DomainBlockRecordDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DomainBlockRecordMapper {

    int add(DomainBlockRecordDao dao);

    int deleteById(@Param("id") Integer id);

    int update(DomainBlockRecordDao dao);
    
    DomainBlockRecordDao findById(@Param("id") Integer id);
}