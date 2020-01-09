package com.railway.mapper;

import com.railway.pojo.entity.DevicePosition;
import com.railway.pojo.param.UpdateDevicePositionByIdParams;
import com.railway.pojo.req.AddDevicePositionReq;
import com.railway.pojo.req.GetDevicePositionListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface DevicePositionMapper {

    int addDevicePosition(AddDevicePositionReq req);

    int deleteDevicePositionById(@Param("id") Integer id);

    int updateDevicePositionById(UpdateDevicePositionByIdParams params);

    DevicePosition getDevicePositionById(@Param("id") Integer id);

    List<DevicePosition> getDevicePositionList(GetDevicePositionListReq req);

}
