package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DamageType;
import com.railway.pojo.req.AddDamageTypeReq;
import com.railway.pojo.req.GetDamageTypeListReq;
import com.railway.pojo.req.UpdateDamageTypeByIdReq;

public interface DamageTypeService {

    boolean addDamageType(AddDamageTypeReq req);

    boolean deleteDamageTypeById(Integer id);

    boolean updateDamageTypeById(Integer id, UpdateDamageTypeByIdReq req);

    DamageType getDamageTypeById(Integer id);

    PageInfo<DamageType> getDamageTypeList(GetDamageTypeListReq req);

}
