package com.@project.service.impl;

import com.@project.mapper.@nameMapper;
import com.@project.pojo.dao.@nameDao;
import com.spider.service.@nameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class @nameServiceImpl implements @nameService {

    @Autowired
    private @nameMapper mapper;

    @Override
    public boolean add(@nameDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, @nameDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public @nameDao findById(Integer id) {
        return mapper.findById(id);
    }
}
