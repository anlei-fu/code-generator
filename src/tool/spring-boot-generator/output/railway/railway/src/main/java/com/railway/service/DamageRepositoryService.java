package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DamageRepository;
import com.railway.pojo.req.AddDamageRepositoryReq;
import com.railway.pojo.req.GetDamageRepositoryListReq;
import com.railway.pojo.req.UpdateDamageRepositoryByOrderDetailIdReq;


public interface DamageRepositoryService {

    boolean addDamageRepository(AddDamageRepositoryReq req);
    
    boolean deleteDamageRepositoryByOrderDetailId(Integer orderDetailId);
    
    boolean updateDamageRepositoryByOrderDetailId(Integer orderDetailId, UpdateDamageRepositoryByOrderDetailIdReq req);
    
    DamageRepository getDamageRepositoryByOrderDetailId(Integer orderDetailId);
    
    PageInfo<DamageRepository> getDamageRepositoryList(GetDamageRepositoryListReq req);

}