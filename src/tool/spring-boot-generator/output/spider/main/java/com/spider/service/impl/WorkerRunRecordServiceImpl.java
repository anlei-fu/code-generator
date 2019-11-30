package com.spider.service.impl;

import com.spider.mapper.WorkerRunRecordMapper;
import com.spider.pojo.dao.WorkerRunRecordDao;
import com.spider.service.WorkerRunRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkerRunRecordServiceImpl implements WorkerRunRecordService {

    @Autowired
    private WorkerRunRecordMapper mapper;

    @Override
    public boolean add(WorkerRunRecordDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, WorkerRunRecordDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public WorkerRunRecordDao findById(Integer id) {
        return mapper.findById(id);
    }
}
