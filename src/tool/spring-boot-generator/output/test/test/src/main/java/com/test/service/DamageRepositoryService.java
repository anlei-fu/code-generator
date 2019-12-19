package com.test.service;

import com.test.pojo.entity.DamageRepository;
import com.test.pojo.req.AddDamageRepositoryReq;
import com.test.pojo.req.GetDamageRepositoryListReq;
import com.test.pojo.req.UpdateDamageRepositoryByOrderDetailIdReq;
import com.github.pagehelper.PageInfo;


public interface DamageRepositoryService {

    boolean addDamageRepository(AddDamageRepositoryReq req);

    boolean deleteDamageRepositoryByOrderDetailId(Integer orderDetailId);

    boolean updateDamageRepositoryByOrderDetailId(Integer orderDetailId, UpdateDamageRepositoryByOrderDetailIdReq req);

    DamageRepository getDamageRepositoryByOrderDetailId(Integer orderDetailId);

    PageInfo<DamageRepository> getDamageRepositoryList(GetDamageRepositoryListReq req);
}