package com.test.service;

import com.test.pojo.entity.DamageRepository;
import com.test.pojo.entity.DamageRepositoryPosition;
import com.test.pojo.req.AddDamageRepositoryPositionReq;
import com.test.pojo.req.GetDamageRepositoryPositionListReq;
import com.test.pojo.req.UpdateDamageRepositoryPositionByOrderDetailIdReq;
import com.github.pagehelper.PageInfo;


public interface DamageRepositoryPositionService {

    boolean addDamageRepositoryPosition(AddDamageRepositoryPositionReq req);

    boolean deleteDamageRepositoryPositionByOrderDetailId(Integer orderDetailId);

    boolean updateDamageRepositoryPositionByOrderDetailId(Integer orderDetailId, UpdateDamageRepositoryPositionByOrderDetailIdReq req);

    DamageRepositoryPosition getDamageRepositoryPositionByOrderDetailId(Integer orderDetailId);

    PageInfo<DamageRepositoryPosition> getDamageRepositoryPositionList(GetDamageRepositoryPositionListReq req);
}