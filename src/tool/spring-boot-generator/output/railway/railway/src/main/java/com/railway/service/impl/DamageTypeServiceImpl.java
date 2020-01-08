package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DamageTypeMapper;
import com.railway.pojo.entity.DamageType;
import com.railway.pojo.entity.DamageType;
import com.railway.pojo.req.AddDamageTypeReq;
import com.railway.pojo.req.GetDamageTypeListReq;
import com.railway.pojo.req.UpdateDamageTypeByIdReq;
import com.railway.service.DamageTypeService;
import com.railway.utils.PageHelperUtils;
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
        params params = new UpdateDamageTypeByIdParams(id, req)
        return damageTypeMapper.updateDamageTypeById(params) > 0;
    }

    @Override
    public DamageType getDamageTypeById(Integer id) {
        return damageTypeMapper.getDamageTypeById(id);
    }

    @Override
    public PageInfo<DamageType> getDamageTypeList(GetDamageTypeListReq req) {
        return PageHelperUtils.page(()=> damageTypeMapper.getDamageTypeList(req));
    }

}
