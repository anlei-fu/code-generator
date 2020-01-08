package com.railway.mapper;

import com.railway.pojo.entity.DeviceDamageMap;
import com.railway.pojo.params.UpdateDeviceDamageMapByIdParams;
import com.railway.pojo.req.AddDeviceDamageMapReq;
import com.railway.pojo.req.GetDeviceDamageMapListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DeviceDamageMapMapper {
        
    int addDeviceDamageMap(AddDeviceDamageMapReq req);
    
        int deleteDeviceDamageMapById(@Params("id") Integer id);
    
        int updateDeviceDamageMapById(UpdateDeviceDamageMapByIdParams params);
    
        DeviceDamageMap getDeviceDamageMapById(@Params("id") Integer id);
    
        List<DeviceDamageMap> getDeviceDamageMapList(GetDeviceDamageMapListReq req);
   
}