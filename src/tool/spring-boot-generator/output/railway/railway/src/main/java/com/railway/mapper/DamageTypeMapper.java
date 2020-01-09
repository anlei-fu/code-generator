package com.railway.mapper;

import com.railway.pojo.entity.DamageType;
import com.railway.pojo.param.UpdateDamageTypeByIdParams;
import com.railway.pojo.req.AddDamageTypeReq;
import com.railway.pojo.req.GetDamageTypeListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface DamageTypeMapper {

    int addDamageType(AddDamageTypeReq req);

    int deleteDamageTypeById(@Param("id") Integer id);

    int updateDamageTypeById(UpdateDamageTypeByIdParams params);

    DamageType getDamageTypeById(@Param("id") Integer id);

    List<DamageType> getDamageTypeList(GetDamageTypeListReq req);

}
