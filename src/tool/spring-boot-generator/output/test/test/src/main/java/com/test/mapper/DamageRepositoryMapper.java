package com.test.mapper;

import com.test.pojo.req.AddDamageRepositoryReq;
import com.test.pojo.req.GetDamageRepositoryListReq;
import com.test.pojo.req.UpdateDamageRepositoryByOrderDetailIdReq;
import com.test.pojo.entity.DamageRepository;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DamageRepositoryMapper {
        
    int addDamageRepository(AddDamageRepositoryReq req);
    
    int deleteDamageRepositoryByOrderDetailId(Integer orderDetailId);
    
    int updateDamageRepositoryByOrderDetailId(@Params("orderDetailId") Integer orderDetailId, @Params("req") UpdateDamageRepositoryByOrderDetailIdReq req);
    
    DamageRepository getDamageRepositoryByOrderDetailId(Integer orderDetailId);
    
    List<DamageRepository> getDamageRepositoryList(GetDamageRepositoryListReq req);   
}