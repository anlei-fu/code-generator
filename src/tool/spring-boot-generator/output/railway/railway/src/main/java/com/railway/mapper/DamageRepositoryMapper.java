package com.railway.mapper;

import com.railway.pojo.entity.DamageRepository;
import com.railway.pojo.params.UpdateDamageRepositoryByOrderDetailIdParams;
import com.railway.pojo.req.AddDamageRepositoryReq;
import com.railway.pojo.req.GetDamageRepositoryListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DamageRepositoryMapper {
        
    int addDamageRepository(AddDamageRepositoryReq req);
    
        int deleteDamageRepositoryByOrderDetailId(@Params("orderDetailId") Integer orderDetailId);
    
        int updateDamageRepositoryByOrderDetailId(UpdateDamageRepositoryByOrderDetailIdParams params);
    
        DamageRepository getDamageRepositoryByOrderDetailId(@Params("orderDetailId") Integer orderDetailId);
    
        List<DamageRepository> getDamageRepositoryList(GetDamageRepositoryListReq req);
   
}