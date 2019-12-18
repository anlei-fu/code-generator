package com.undefined.mapper;

import com.undefined.pojo.entity.DamageRepositoryPosition;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DamageRepositoryPositionMapper {
        
    int addDamageRepositoryPosition(AddDamageRepositoryPositionReq req);
    
    int deleteDamageRepositoryPositionByOrderDetailId(Integer orderDetailId);
    
    int updateDamageRepositoryPositionByOrderDetailId(@Params("orderDetailId") Integer orderDetailId, @Params("req") UpdateDamageRepositoryPositionByOrderDetailIdReq req);
    
    DamageRepositoryPosition getDamageRepositoryPositionByOrderDetailId(Integer orderDetailId);
    
    List<DamageRepositoryPosition> getDamageRepositoryPositionList(GetDamageRepositoryPositionListReq req);   
}