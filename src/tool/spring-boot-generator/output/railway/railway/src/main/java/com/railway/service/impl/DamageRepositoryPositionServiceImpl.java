package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DamageRepositoryPositionMapper;
import com.railway.pojo.entity.DamageRepositoryPosition;
import com.railway.pojo.entity.DamageRepository;
import com.railway.pojo.entity.DamageRepositoryPosition;
import com.railway.pojo.param.UpdateDamageRepositoryPositionByOrderDetailIdParams;
import com.railway.pojo.req.AddDamageRepositoryPositionReq;
import com.railway.pojo.req.GetDamageRepositoryPositionListReq;
import com.railway.pojo.req.UpdateDamageRepositoryPositionByOrderDetailIdReq;
import com.railway.service.DamageRepositoryPositionService;
import com.railway.utils.PageHelperUtils;
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
        UpdateDamageRepositoryPositionByOrderDetailIdParams params = new UpdateDamageRepositoryPositionByOrderDetailIdParams(orderDetailId, req);
        return damageRepositoryPositionMapper.updateDamageRepositoryPositionByOrderDetailId(params) > 0;
    }

    @Override
    public DamageRepositoryPosition getDamageRepositoryPositionByOrderDetailId(Integer orderDetailId) {
        return damageRepositoryPositionMapper.getDamageRepositoryPositionByOrderDetailId(orderDetailId);
    }

    @Override
    public PageInfo<DamageRepositoryPosition> getDamageRepositoryPositionList(GetDamageRepositoryPositionListReq req) {
        return PageHelperUtils.paging(req, () -> damageRepositoryPositionMapper.getDamageRepositoryPositionList(req));
    }

}

