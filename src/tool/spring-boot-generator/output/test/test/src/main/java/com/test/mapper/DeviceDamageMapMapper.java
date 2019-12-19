package com.test.mapper;

import com.test.pojo.req.AddDeviceDamageMapReq;
import com.test.pojo.req.GetDeviceDamageMapListReq;
import com.test.pojo.req.UpdateDeviceDamageMapByIdReq;
import com.test.pojo.entity.DeviceDamageMap;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DeviceDamageMapMapper {
        
    int addDeviceDamageMap(AddDeviceDamageMapReq req);
    
    int deleteDeviceDamageMapById(Integer id);
    
    int updateDeviceDamageMapById(@Params("id") Integer id, @Params("req") UpdateDeviceDamageMapByIdReq req);
    
    DeviceDamageMap getDeviceDamageMapById(Integer id);
    
    List<DeviceDamageMap> getDeviceDamageMapList(GetDeviceDamageMapListReq req);   
}