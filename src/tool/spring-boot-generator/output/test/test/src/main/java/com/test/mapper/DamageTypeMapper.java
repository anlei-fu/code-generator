package com.undefined.mapper;

import com.undefined.pojo.entity.DamageType;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DamageTypeMapper {
        
    int addDamageType(AddDamageTypeReq req);
    
    int deleteDamageTypeById(Integer id);
    
    int updateDamageTypeById(@Params("id") Integer id, @Params("req") UpdateDamageTypeByIdReq req);
    
    DamageType getDamageTypeById(Integer id);
    
    List<DamageType> getDamageTypeList(GetDamageTypeListReq req);   
}