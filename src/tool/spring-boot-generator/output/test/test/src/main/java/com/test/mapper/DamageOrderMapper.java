package com.undefined.mapper;

import com.undefined.pojo.entity.DamageOrder;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DamageOrderMapper {
        
    int addDamageOrder(AddDamageOrderReq req);
    
    int deleteDamageOrderByOrderNo(Integer orderNo);
    
    int updateDamageOrderByOrderNo(@Params("orderNo") Integer orderNo, @Params("req") UpdateDamageOrderByOrderNoReq req);
    
    DamageOrder getDamageOrderByOrderNo(Integer orderNo);
    
    List<DamageOrder> getDamageOrderList(GetDamageOrderListReq req);   
}