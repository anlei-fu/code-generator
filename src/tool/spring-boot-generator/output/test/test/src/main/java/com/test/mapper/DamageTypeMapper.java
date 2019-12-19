package com.test.mapper;

import com.test.pojo.req.AddDamageTypeReq;
import com.test.pojo.req.GetDamageTypeListReq;
import com.test.pojo.req.UpdateDamageTypeByIdReq;
import com.test.pojo.entity.DamageType;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DamageTypeMapper {
        
    int addDamageType(AddDamageTypeReq req);
    
    int deleteDamageTypeById(Integer id);
    
    int updateDamageTypeById(@Params("id") Integer id, @Params("req") UpdateDamageTypeByIdReq req);
    
    DamageType getDamageTypeById(Integer id);
    
    List<DamageType> getDamageTypeList(GetDamageTypeListReq req);   
}