package com.spider.service.impl;

import com.spider.mapper.DomainInfoMapper;
import com.spider.pojo.dao.DomainInfoDao;
import com.spider.service.DomainInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DomainInfoServiceImpl implements DomainInfoService {

    @Autowired
    private DomainInfoMapper mapper;

    @Override
    public boolean add(DomainInfoDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, DomainInfoDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public DomainInfoDao findById(Integer id) {
        return mapper.findById(id);
    }
}
