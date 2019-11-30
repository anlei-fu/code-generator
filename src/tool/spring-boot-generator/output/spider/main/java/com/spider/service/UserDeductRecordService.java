package com.spider.service;

import com.spider.pojo.dao.UserDeductRecordDao;

public interface UserDeductRecordService {

    boolean add(UserDeductRecordDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,UserDeductRecordDao dao);

    UserDeductRecordDao findById(Integer id);
}