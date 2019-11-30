package com.spider.service;

import com.spider.pojo.dao.UserInfoDao;

public interface UserInfoService {

    boolean add(UserInfoDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,UserInfoDao dao);

    UserInfoDao findById(Integer id);
}