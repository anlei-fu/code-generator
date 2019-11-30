package com.spider.service;

import com.spider.pojo.dao.AdminInfoDao;

public interface AdminInfoService {

    boolean add(AdminInfoDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,AdminInfoDao dao);

    AdminInfoDao findById(Integer id);
}