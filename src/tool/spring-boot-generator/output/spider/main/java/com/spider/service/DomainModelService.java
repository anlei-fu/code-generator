package com.spider.service;

import com.spider.pojo.dao.DomainModelDao;

public interface DomainModelService {

    boolean add(DomainModelDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,DomainModelDao dao);

    DomainModelDao findById(Integer id);
}