package com.spider.service.impl;

import com.spider.mapper.UserDeductRecordMapper;
import com.spider.pojo.dao.UserDeductRecordDao;
import com.spider.service.UserDeductRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDeductRecordServiceImpl implements UserDeductRecordService {

    @Autowired
    private UserDeductRecordMapper mapper;

    @Override
    public boolean add(UserDeductRecordDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, UserDeductRecordDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public UserDeductRecordDao findById(Integer id) {
        return mapper.findById(id);
    }
}
