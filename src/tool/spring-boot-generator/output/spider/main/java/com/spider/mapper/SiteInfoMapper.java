package com.spider.mapper;

import com.spider.pojo.dao.SiteInfoDao;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface SiteInfoMapper {

    int add(SiteInfoDao dao);

    int deleteById(@Param("id") Integer id);

    int update(SiteInfoDao dao);
    
    SiteInfoDao findById(@Param("id") Integer id);
}