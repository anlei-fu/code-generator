package com.spider.service.impl;

import com.spider.mapper.AdminInfoMapper;
import com.spider.pojo.dao.AdminInfoDao;
import com.spider.service.AdminInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminInfoServiceImpl implements AdminInfoService {

    @Autowired
    private AdminInfoMapper mapper;

    @Override
    public boolean add(AdminInfoDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, AdminInfoDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public AdminInfoDao findById(Integer id) {
        return mapper.findById(id);
    }
}
