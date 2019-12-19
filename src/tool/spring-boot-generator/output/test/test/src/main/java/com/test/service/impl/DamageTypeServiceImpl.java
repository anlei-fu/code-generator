package com.test.service.impl;

import com.test.pojo.req.AddDamageTypeReq;
import com.test.pojo.req.GetDamageTypeListReq;
import com.test.pojo.req.UpdateDamageTypeByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.DamageTypeMapper;
import com.test.pojo.entity.DamageType;
import com.test.service.DamageTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DamageTypeServiceImpl implements DamageTypeService {

    @Autowired
    private DamageTypeMapper damageTypeMapper;

    @Override
    public boolean addDamageType(AddDamageTypeReq req) {
        return damageTypeMapper.addDamageType(req) > 0;
    }


    @Override
    public boolean deleteDamageTypeById(Integer id) {
        return damageTypeMapper.deleteDamageTypeById(id) > 0;
    }


    @Override
    public boolean updateDamageTypeById(Integer id, UpdateDamageTypeByIdReq req) {
        return damageTypeMapper.updateDamageTypeById(id, req) > 0;
    }


    @Override
    public DamageType getDamageTypeById(Integer id) {
        return damageTypeMapper.getDamageTypeById(id);
    }


    @Override
    public PageInfo<DamageType> getDamageTypeList(GetDamageTypeListReq req) {
        return damageTypeMapper.getDamageTypeList(req);
    }
}
