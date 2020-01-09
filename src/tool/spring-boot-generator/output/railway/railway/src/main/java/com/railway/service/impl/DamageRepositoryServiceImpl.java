package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DamageRepositoryMapper;
import com.railway.pojo.entity.DamageRepository;
import com.railway.pojo.entity.DamageRepository;
import com.railway.pojo.param.UpdateDamageRepositoryByOrderDetailIdParams;
import com.railway.pojo.req.AddDamageRepositoryReq;
import com.railway.pojo.req.GetDamageRepositoryListReq;
import com.railway.pojo.req.UpdateDamageRepositoryByOrderDetailIdReq;
import com.railway.service.DamageRepositoryService;
import com.railway.utils.PageHelperUtils;
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
        UpdateDamageRepositoryByOrderDetailIdParams params = new UpdateDamageRepositoryByOrderDetailIdParams(orderDetailId, req);
        return damageRepositoryMapper.updateDamageRepositoryByOrderDetailId(params) > 0;
    }

    @Override
    public DamageRepository getDamageRepositoryByOrderDetailId(Integer orderDetailId) {
        return damageRepositoryMapper.getDamageRepositoryByOrderDetailId(orderDetailId);
    }

    @Override
    public PageInfo<DamageRepository> getDamageRepositoryList(GetDamageRepositoryListReq req) {
        return PageHelperUtils.paging(req, () -> damageRepositoryMapper.getDamageRepositoryList(req));
    }

}

