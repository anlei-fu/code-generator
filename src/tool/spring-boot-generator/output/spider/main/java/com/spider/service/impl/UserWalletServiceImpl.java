package com.spider.service.impl;

import com.spider.mapper.UserWalletMapper;
import com.spider.pojo.dao.UserWalletDao;
import com.spider.service.UserWalletService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserWalletServiceImpl implements UserWalletService {

    @Autowired
    private UserWalletMapper mapper;

    @Override
    public boolean add(UserWalletDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, UserWalletDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public UserWalletDao findById(Integer id) {
        return mapper.findById(id);
    }
}
