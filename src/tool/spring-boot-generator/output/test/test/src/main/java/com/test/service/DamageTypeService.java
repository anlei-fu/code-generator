package com.undefined.service;

import com.undefined.pojo.entity.DamageType;

public interface DamageTypeService {

    boolean addDamageType(AddDamageTypeReq req);

    boolean deleteDamageTypeById(Integer id);

    boolean updateDamageTypeById(Integer id, UpdateDamageTypeByIdReq req);

    DamageType getDamageTypeById(Integer id);

    PageInfo<DamageType> getDamageTypeList(GetDamageTypeListReq req);
}