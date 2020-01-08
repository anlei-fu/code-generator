package com.railway.mapper;

import com.railway.pojo.entity.BureauLineOrder;
import com.railway.pojo.params.UpdateBureauLineOrderByIdParams;
import com.railway.pojo.req.AddBureauLineOrderReq;
import com.railway.pojo.req.GetBureauLineOrderListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface BureauLineOrderMapper {
        
    int addBureauLineOrder(AddBureauLineOrderReq req);
    
        int deleteBureauLineOrderById(@Params("id") Integer id);
    
        int updateBureauLineOrderById(UpdateBureauLineOrderByIdParams params);
    
        BureauLineOrder getBureauLineOrderById(@Params("id") Integer id);
    
        List<BureauLineOrder> getBureauLineOrderList(GetBureauLineOrderListReq req);
   
}