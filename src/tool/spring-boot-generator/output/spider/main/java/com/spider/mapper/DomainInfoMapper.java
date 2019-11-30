package com.spider.mapper;

import com.spider.pojo.dao.DomainInfoDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DomainInfoMapper {

    int add(DomainInfoDao dao);

    int deleteById(@Param("id") Integer id);

    int update(DomainInfoDao dao);
    
    DomainInfoDao findById(@Param("id") Integer id);
}