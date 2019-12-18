package com.undefined.service;

import com.undefined.pojo.entity.DamageRepositoryPosition;

public interface DamageRepositoryPositionService {

    boolean addDamageRepositoryPosition(AddDamageRepositoryPositionReq req);

    boolean deleteDamageRepositoryPositionByOrderDetailId(Integer orderDetailId);

    boolean updateDamageRepositoryPositionByOrderDetailId(Integer orderDetailId, UpdateDamageRepositoryPositionByOrderDetailIdReq req);

    DamageRepositoryPosition getDamageRepositoryPositionByOrderDetailId(Integer orderDetailId);

    PageInfo<DamageRepositoryPosition> getDamageRepositoryPositionList(GetDamageRepositoryPositionListReq req);
}