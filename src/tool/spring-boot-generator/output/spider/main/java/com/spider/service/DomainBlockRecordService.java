package com.spider.service;

import com.spider.pojo.dao.DomainBlockRecordDao;

public interface DomainBlockRecordService {

    boolean add(DomainBlockRecordDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,DomainBlockRecordDao dao);

    DomainBlockRecordDao findById(Integer id);
}