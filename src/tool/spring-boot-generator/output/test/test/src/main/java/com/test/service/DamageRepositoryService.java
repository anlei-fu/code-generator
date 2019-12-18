package com.undefined.service;

import com.undefined.pojo.entity.DamageRepository;

public interface DamageRepositoryService {

    boolean addDamageRepository(AddDamageRepositoryReq req);

    boolean deleteDamageRepositoryByOrderDetailId(Integer orderDetailId);

    boolean updateDamageRepositoryByOrderDetailId(Integer orderDetailId, UpdateDamageRepositoryByOrderDetailIdReq req);

    DamageRepository getDamageRepositoryByOrderDetailId(Integer orderDetailId);

    PageInfo<DamageRepository> getDamageRepositoryList(GetDamageRepositoryListReq req);
}