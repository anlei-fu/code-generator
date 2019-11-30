package com.spider.service.impl;

import com.spider.mapper.UserChargeRecordMapper;
import com.spider.pojo.dao.UserChargeRecordDao;
import com.spider.service.UserChargeRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserChargeRecordServiceImpl implements UserChargeRecordService {

    @Autowired
    private UserChargeRecordMapper mapper;

    @Override
    public boolean add(UserChargeRecordDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, UserChargeRecordDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public UserChargeRecordDao findById(Integer id) {
        return mapper.findById(id);
    }
}
