package com.undefined.mapper;

import com.undefined.pojo.entity.DamageRepository;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DamageRepositoryMapper {
        
    int addDamageRepository(AddDamageRepositoryReq req);
    
    int deleteDamageRepositoryByOrderDetailId(Integer orderDetailId);
    
    int updateDamageRepositoryByOrderDetailId(@Params("orderDetailId") Integer orderDetailId, @Params("req") UpdateDamageRepositoryByOrderDetailIdReq req);
    
    DamageRepository getDamageRepositoryByOrderDetailId(Integer orderDetailId);
    
    List<DamageRepository> getDamageRepositoryList(GetDamageRepositoryListReq req);   
}