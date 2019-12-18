package com.undefined.mapper;

import com.undefined.pojo.entity.DevicePosition;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DevicePositionMapper {
        
    int addDevicePosition(AddDevicePositionReq req);
    
    int deleteDevicePositionById(Integer id);
    
    int updateDevicePositionById(@Params("id") Integer id, @Params("req") UpdateDevicePositionByIdReq req);
    
    DevicePosition getDevicePositionById(Integer id);
    
    List<DevicePosition> getDevicePositionList(GetDevicePositionListReq req);   
}