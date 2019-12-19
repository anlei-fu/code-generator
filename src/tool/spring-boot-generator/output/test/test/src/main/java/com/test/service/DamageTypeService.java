package com.test.service;

import com.test.pojo.entity.DamageType;
import com.test.pojo.req.AddDamageTypeReq;
import com.test.pojo.req.GetDamageTypeListReq;
import com.test.pojo.req.UpdateDamageTypeByIdReq;
import com.github.pagehelper.PageInfo;


public interface DamageTypeService {

    boolean addDamageType(AddDamageTypeReq req);

    boolean deleteDamageTypeById(Integer id);

    boolean updateDamageTypeById(Integer id, UpdateDamageTypeByIdReq req);

    DamageType getDamageTypeById(Integer id);

    PageInfo<DamageType> getDamageTypeList(GetDamageTypeListReq req);
}