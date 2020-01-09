package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DamageRepository;
import com.railway.pojo.entity.DamageRepositoryPosition;
import com.railway.pojo.req.AddDamageRepositoryPositionReq;
import com.railway.pojo.req.GetDamageRepositoryPositionListReq;
import com.railway.pojo.req.UpdateDamageRepositoryPositionByOrderDetailIdReq;

public interface DamageRepositoryPositionService {

    boolean addDamageRepositoryPosition(AddDamageRepositoryPositionReq req);

    boolean deleteDamageRepositoryPositionByOrderDetailId(Integer orderDetailId);

    boolean updateDamageRepositoryPositionByOrderDetailId(Integer orderDetailId, UpdateDamageRepositoryPositionByOrderDetailIdReq req);

    DamageRepositoryPosition getDamageRepositoryPositionByOrderDetailId(Integer orderDetailId);

    PageInfo<DamageRepositoryPosition> getDamageRepositoryPositionList(GetDamageRepositoryPositionListReq req);

}
