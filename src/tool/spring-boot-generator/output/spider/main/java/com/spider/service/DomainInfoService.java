package com.spider.service;

import com.spider.pojo.dao.DomainInfoDao;

public interface DomainInfoService {

    boolean add(DomainInfoDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,DomainInfoDao dao);

    DomainInfoDao findById(Integer id);
}