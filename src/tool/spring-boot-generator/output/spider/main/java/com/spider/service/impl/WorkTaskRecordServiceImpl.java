package com.spider.service.impl;

import com.spider.mapper.WorkTaskRecordMapper;
import com.spider.pojo.dao.WorkTaskRecordDao;
import com.spider.service.WorkTaskRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkTaskRecordServiceImpl implements WorkTaskRecordService {

    @Autowired
    private WorkTaskRecordMapper mapper;

    @Override
    public boolean add(WorkTaskRecordDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, WorkTaskRecordDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public WorkTaskRecordDao findById(Integer id) {
        return mapper.findById(id);
    }
}
