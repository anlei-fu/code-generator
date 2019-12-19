package com.test.mapper;

import com.test.pojo.req.AddDamageRepositoryPositionReq;
import com.test.pojo.req.GetDamageRepositoryPositionListReq;
import com.test.pojo.req.UpdateDamageRepositoryPositionByOrderDetailIdReq;
import com.test.pojo.entity.DamageRepositoryPosition;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DamageRepositoryPositionMapper {
        
    int addDamageRepositoryPosition(AddDamageRepositoryPositionReq req);
    
    int deleteDamageRepositoryPositionByOrderDetailId(Integer orderDetailId);
    
    int updateDamageRepositoryPositionByOrderDetailId(@Params("orderDetailId") Integer orderDetailId, @Params("req") UpdateDamageRepositoryPositionByOrderDetailIdReq req);
    
    DamageRepositoryPosition getDamageRepositoryPositionByOrderDetailId(Integer orderDetailId);
    
    List<DamageRepositoryPosition> getDamageRepositoryPositionList(GetDamageRepositoryPositionListReq req);   
}