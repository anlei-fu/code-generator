package com.spider.service.impl;

import com.spider.mapper.SiteInfoMapper;
import com.spider.pojo.dao.SiteInfoDao;
import com.spider.service.SiteInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SiteInfoServiceImpl implements SiteInfoService {

    @Autowired
    private SiteInfoMapper mapper;

    @Override
    public boolean add(SiteInfoDao dao) {
        return mapper.add(dao) > 0;
    }

    @Override
    public boolean deleteById(Integer id) {
        return mapper.deleteById(id) > 0;
    }
    
    @Override
    public boolean updateById(Integer id, SiteInfoDao dao) {
        return mapper.update(dao) > 0;
    }

    @Override
    public SiteInfoDao findById(Integer id) {
        return mapper.findById(id);
    }
}
