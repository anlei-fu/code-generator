package com.test.mapper;

import com.test.pojo.req.AddDamageOrderReq;
import com.test.pojo.req.GetDamageOrderListReq;
import com.test.pojo.req.UpdateDamageOrderByOrderNoReq;
import com.test.pojo.entity.DamageOrder;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DamageOrderMapper {
        
    int addDamageOrder(AddDamageOrderReq req);
    
    int deleteDamageOrderByOrderNo(Integer orderNo);
    
    int updateDamageOrderByOrderNo(@Params("orderNo") Integer orderNo, @Params("req") UpdateDamageOrderByOrderNoReq req);
    
    DamageOrder getDamageOrderByOrderNo(Integer orderNo);
    
    List<DamageOrder> getDamageOrderList(GetDamageOrderListReq req);   
}