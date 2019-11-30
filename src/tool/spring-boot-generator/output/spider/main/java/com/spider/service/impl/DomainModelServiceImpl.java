package com.spider.service.impl;

import com.spider.mapper.DomainModelMapper;
import com.spider.pojo.dao.DomainModelDao;
import com.spider.service.DomainModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DomainModelServiceImpl implements DomainModelService {

    @Autowired
    private DomainModelMapper mapper;

    @Override
    public boolean add(DomainModelDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, DomainModelDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public DomainModelDao findById(Integer id) {
        return mapper.findById(id);
    }
}
