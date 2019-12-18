package com.undefined.mapper;

import com.undefined.pojo.entity.BureauLineOrder;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface BureauLineOrderMapper {
        
    int addBureauLineOrder(AddBureauLineOrderReq req);
    
    int deleteBureauLineOrderById(Integer id);
    
    int updateBureauLineOrderById(@Params("id") Integer id, @Params("req") UpdateBureauLineOrderByIdReq req);
    
    BureauLineOrder getBureauLineOrderById(Integer id);
    
    List<BureauLineOrder> getBureauLineOrderList(GetBureauLineOrderListReq req);   
}