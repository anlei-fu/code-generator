package com.spider.service;

import com.spider.pojo.dao.SiteInfoDao;

public interface SiteInfoService {

    boolean add(SiteInfoDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,SiteInfoDao dao);

    SiteInfoDao findById(Integer id);
}