package com.undefined.mapper;

import com.undefined.pojo.entity.DamageRepositoryDevice;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DamageRepositoryDeviceMapper {
        
    int addDamageRepositoryDevice(AddDamageRepositoryDeviceReq req);
    
    int deleteDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId);
    
    int updateDamageRepositoryDeviceByOrderDetailId(@Params("orderDetailId") Integer orderDetailId, @Params("req") UpdateDamageRepositoryDeviceByOrderDetailIdReq req);
    
    DamageRepositoryDevice getDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId);
    
    List<DamageRepositoryDevice> getDamageRepositoryDeviceList(GetDamageRepositoryDeviceListReq req);   
}