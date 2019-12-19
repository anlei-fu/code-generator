package com.test.mapper;

import com.test.pojo.req.AddBureauLineOrderReq;
import com.test.pojo.req.GetBureauLineOrderListReq;
import com.test.pojo.req.UpdateBureauLineOrderByIdReq;
import com.test.pojo.entity.BureauLineOrder;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface BureauLineOrderMapper {
        
    int addBureauLineOrder(AddBureauLineOrderReq req);
    
    int deleteBureauLineOrderById(Integer id);
    
    int updateBureauLineOrderById(@Params("id") Integer id, @Params("req") UpdateBureauLineOrderByIdReq req);
    
    BureauLineOrder getBureauLineOrderById(Integer id);
    
    List<BureauLineOrder> getBureauLineOrderList(GetBureauLineOrderListReq req);   
}