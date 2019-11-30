package com.spider.mapper;

import com.spider.pojo.dao.DomainModelDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DomainModelMapper {

    int add(DomainModelDao dao);

    int deleteById(@Param("id") Integer id);

    int update(DomainModelDao dao);
    
    DomainModelDao findById(@Param("id") Integer id);
}