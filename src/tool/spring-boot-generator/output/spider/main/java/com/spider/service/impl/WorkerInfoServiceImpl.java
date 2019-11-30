package com.spider.service.impl;

import com.spider.mapper.WorkerInfoMapper;
import com.spider.pojo.dao.WorkerInfoDao;
import com.spider.service.WorkerInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkerInfoServiceImpl implements WorkerInfoService {

    @Autowired
    private WorkerInfoMapper mapper;

    @Override
    public boolean add(WorkerInfoDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, WorkerInfoDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public WorkerInfoDao findById(Integer id) {
        return mapper.findById(id);
    }
}
