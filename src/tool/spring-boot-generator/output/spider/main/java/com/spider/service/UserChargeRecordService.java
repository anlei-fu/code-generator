package com.spider.service;

import com.spider.pojo.dao.UserChargeRecordDao;

public interface UserChargeRecordService {

    boolean add(UserChargeRecordDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,UserChargeRecordDao dao);

    UserChargeRecordDao findById(Integer id);
}