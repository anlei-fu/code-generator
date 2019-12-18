package com.undefined.mapper;

import com.undefined.pojo.entity.DeviceDamageMap;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DeviceDamageMapMapper {
        
    int addDeviceDamageMap(AddDeviceDamageMapReq req);
    
    int deleteDeviceDamageMapById(Integer id);
    
    int updateDeviceDamageMapById(@Params("id") Integer id, @Params("req") UpdateDeviceDamageMapByIdReq req);
    
    DeviceDamageMap getDeviceDamageMapById(Integer id);
    
    List<DeviceDamageMap> getDeviceDamageMapList(GetDeviceDamageMapListReq req);   
}