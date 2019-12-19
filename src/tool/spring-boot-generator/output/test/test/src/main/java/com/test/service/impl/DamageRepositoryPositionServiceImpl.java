package com.test.service.impl;

import com.test.pojo.req.AddDamageRepositoryPositionReq;
import com.test.pojo.req.GetDamageRepositoryPositionListReq;
import com.test.pojo.req.UpdateDamageRepositoryPositionByOrderDetailIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.DamageRepositoryPositionMapper;
import com.test.pojo.entity.DamageRepositoryPosition;
import com.test.service.DamageRepositoryPositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DamageRepositoryPositionServiceImpl implements DamageRepositoryPositionService {

    @Autowired
    private DamageRepositoryPositionMapper damageRepositoryPositionMapper;

    @Override
    public boolean addDamageRepositoryPosition(AddDamageRepositoryPositionReq req) {
        return damageRepositoryPositionMapper.addDamageRepositoryPosition(req) > 0;
    }


    @Override
    public boolean deleteDamageRepositoryPositionByOrderDetailId(Integer orderDetailId) {
        return damageRepositoryPositionMapper.deleteDamageRepositoryPositionByOrderDetailId(orderDetailId) > 0;
    }


    @Override
    public boolean updateDamageRepositoryPositionByOrderDetailId(Integer orderDetailId, UpdateDamageRepositoryPositionByOrderDetailIdReq req) {
        return damageRepositoryPositionMapper.updateDamageRepositoryPositionByOrderDetailId(orderDetailId, req) > 0;
    }


    @Override
    public DamageRepositoryPosition getDamageRepositoryPositionByOrderDetailId(Integer orderDetailId) {
        return damageRepositoryPositionMapper.getDamageRepositoryPositionByOrderDetailId(orderDetailId);
    }


    @Override
    public PageInfo<DamageRepositoryPosition> getDamageRepositoryPositionList(GetDamageRepositoryPositionListReq req) {
        return damageRepositoryPositionMapper.getDamageRepositoryPositionList(req);
    }
}
