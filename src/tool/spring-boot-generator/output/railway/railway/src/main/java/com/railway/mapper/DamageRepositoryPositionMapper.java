package com.railway.mapper;

import com.railway.pojo.entity.DamageRepository;
import com.railway.pojo.entity.DamageRepositoryPosition;
import com.railway.pojo.param.UpdateDamageRepositoryPositionByOrderDetailIdParams;
import com.railway.pojo.req.AddDamageRepositoryPositionReq;
import com.railway.pojo.req.GetDamageRepositoryPositionListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface DamageRepositoryPositionMapper {

    int addDamageRepositoryPosition(AddDamageRepositoryPositionReq req);

    int deleteDamageRepositoryPositionByOrderDetailId(@Param("orderDetailId") Integer orderDetailId);

    int updateDamageRepositoryPositionByOrderDetailId(UpdateDamageRepositoryPositionByOrderDetailIdParams params);

    DamageRepositoryPosition getDamageRepositoryPositionByOrderDetailId(@Param("orderDetailId") Integer orderDetailId);

    List<DamageRepositoryPosition> getDamageRepositoryPositionList(GetDamageRepositoryPositionListReq req);

}
