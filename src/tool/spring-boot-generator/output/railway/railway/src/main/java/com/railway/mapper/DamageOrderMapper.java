package com.railway.mapper;

import com.railway.pojo.entity.DamageOrder;
import com.railway.pojo.params.UpdateDamageOrderByOrderNoParams;
import com.railway.pojo.req.AddDamageOrderReq;
import com.railway.pojo.req.GetDamageOrderListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DamageOrderMapper {
        
    int addDamageOrder(AddDamageOrderReq req);
    
        int deleteDamageOrderByOrderNo(@Params("orderNo") Integer orderNo);
    
        int updateDamageOrderByOrderNo(UpdateDamageOrderByOrderNoParams params);
    
        DamageOrder getDamageOrderByOrderNo(@Params("orderNo") Integer orderNo);
    
        List<DamageOrder> getDamageOrderList(GetDamageOrderListReq req);
   
}