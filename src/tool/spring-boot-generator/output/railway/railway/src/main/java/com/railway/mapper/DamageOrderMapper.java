package com.railway.mapper;

import com.railway.pojo.entity.DamageOrder;
import com.railway.pojo.param.UpdateDamageOrderByOrderNoParams;
import com.railway.pojo.req.AddDamageOrderReq;
import com.railway.pojo.req.GetDamageOrderListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface DamageOrderMapper {

    int addDamageOrder(AddDamageOrderReq req);

    int deleteDamageOrderByOrderNo(@Param("orderNo") String orderNo);

    int updateDamageOrderByOrderNo(UpdateDamageOrderByOrderNoParams params);

    DamageOrder getDamageOrderByOrderNo(@Param("orderNo") String orderNo);

    List<DamageOrder> getDamageOrderList(GetDamageOrderListReq req);

}
