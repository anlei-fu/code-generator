package com.test.mapper;

import com.test.pojo.req.AddDamageRepositoryDeviceReq;
import com.test.pojo.req.GetDamageRepositoryDeviceListReq;
import com.test.pojo.req.UpdateDamageRepositoryDeviceByOrderDetailIdReq;
import com.test.pojo.entity.DamageRepositoryDevice;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DamageRepositoryDeviceMapper {
        
    int addDamageRepositoryDevice(AddDamageRepositoryDeviceReq req);
    
    int deleteDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId);
    
    int updateDamageRepositoryDeviceByOrderDetailId(@Params("orderDetailId") Integer orderDetailId, @Params("req") UpdateDamageRepositoryDeviceByOrderDetailIdReq req);
    
    DamageRepositoryDevice getDamageRepositoryDeviceByOrderDetailId(Integer orderDetailId);
    
    List<DamageRepositoryDevice> getDamageRepositoryDeviceList(GetDamageRepositoryDeviceListReq req);   
}