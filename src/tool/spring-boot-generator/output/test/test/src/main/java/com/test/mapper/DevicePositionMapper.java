package com.test.mapper;

import com.test.pojo.req.AddDevicePositionReq;
import com.test.pojo.req.GetDevicePositionListReq;
import com.test.pojo.req.UpdateDevicePositionByIdReq;
import com.test.pojo.entity.DevicePosition;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DevicePositionMapper {
        
    int addDevicePosition(AddDevicePositionReq req);
    
    int deleteDevicePositionById(Integer id);
    
    int updateDevicePositionById(@Params("id") Integer id, @Params("req") UpdateDevicePositionByIdReq req);
    
    DevicePosition getDevicePositionById(Integer id);
    
    List<DevicePosition> getDevicePositionList(GetDevicePositionListReq req);   
}