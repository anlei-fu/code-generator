package com.@project.service;

import com.@project.pojo.dao.@nameDao;

public interface @nameService {

    boolean add(@nameDao dao);

    boolean deleteById(Integer id);

    boolean updateById(Integer id,@nameDao dao);

    @nameDao findById(Integer id);
}