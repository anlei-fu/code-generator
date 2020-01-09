package com.railway.mapper;

import com.railway.pojo.entity.DamageRepository;
import com.railway.pojo.entity.DamageRepositoryDevice;
import com.railway.pojo.param.UpdateDamageRepositoryDeviceByOrderDetailIdParams;
import com.railway.pojo.req.AddDamageRepositoryDeviceReq;
import com.railway.pojo.req.GetDamageRepositoryDeviceListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface DamageRepositoryDeviceMapper {

    int addDamageRepositoryDevice(AddDamageRepositoryDeviceReq req);

    int deleteDamageRepositoryDeviceByOrderDetailId(@Param("orderDetailId") Integer orderDetailId);

    int updateDamageRepositoryDeviceByOrderDetailId(UpdateDamageRepositoryDeviceByOrderDetailIdParams params);

    DamageRepositoryDevice getDamageRepositoryDeviceByOrderDetailId(@Param("orderDetailId") Integer orderDetailId);

    List<DamageRepositoryDevice> getDamageRepositoryDeviceList(GetDamageRepositoryDeviceListReq req);

}
