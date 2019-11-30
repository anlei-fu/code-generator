package com.spider.service;

import com.spider.pojo.dao.UserWalletDao;

public interface UserWalletService {

    boolean add(UserWalletDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,UserWalletDao dao);

    UserWalletDao findById(Integer id);
}