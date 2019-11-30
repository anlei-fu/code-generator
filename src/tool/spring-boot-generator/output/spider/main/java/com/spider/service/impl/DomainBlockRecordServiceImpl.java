package com.spider.service.impl;

import com.spider.mapper.DomainBlockRecordMapper;
import com.spider.pojo.dao.DomainBlockRecordDao;
import com.spider.service.DomainBlockRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DomainBlockRecordServiceImpl implements DomainBlockRecordService {

    @Autowired
    private DomainBlockRecordMapper mapper;

    @Override
    public boolean add(DomainBlockRecordDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, DomainBlockRecordDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public DomainBlockRecordDao findById(Integer id) {
        return mapper.findById(id);
    }
}
