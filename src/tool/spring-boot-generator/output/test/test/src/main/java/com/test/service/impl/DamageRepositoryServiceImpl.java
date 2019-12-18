package com.undefined.service.impl;

import com.undefined.mapper.DamageRepositoryMapper;
import com.undefined.pojo.entity.DamageRepository;
import com.spider.service.DamageRepositoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DamageRepositoryServiceImpl implements DamageRepositoryService {

    @Autowired
    private DamageRepositoryMapper damageRepositoryMapper;

    @Override
    public boolean addDamageRepository(AddDamageRepositoryReq req) {
        return damageRepositoryMapper.addDamageRepository(req) > 0;
    }


    @Override
    public boolean deleteDamageRepositoryByOrderDetailId(Integer orderDetailId) {
        return damageRepositoryMapper.deleteDamageRepositoryByOrderDetailId(orderDetailId) > 0;
    }


    @Override
    public boolean updateDamageRepositoryByOrderDetailId(Integer orderDetailId, UpdateDamageRepositoryByOrderDetailIdReq req) {
        return damageRepositoryMapper.updateDamageRepositoryByOrderDetailId(orderDetailId, req) > 0;
    }


    @Override
    public DamageRepository getDamageRepositoryByOrderDetailId(Integer orderDetailId) {
        return damageRepositoryMapper.getDamageRepositoryByOrderDetailId(orderDetailId);
    }


    @Override
    public PageInfo<DamageRepository> getDamageRepositoryList(GetDamageRepositoryListReq req) {
        return damageRepositoryMapper.getDamageRepositoryList(req);
    }
}
