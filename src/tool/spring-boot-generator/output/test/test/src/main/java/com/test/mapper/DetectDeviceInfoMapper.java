package com.undefined.mapper;

import com.undefined.pojo.entity.DetectDeviceInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DetectDeviceInfoMapper {
        
    int addDetectDeviceInfo(AddDetectDeviceInfoReq req);
    
    int deleteDetectDeviceInfoById(Integer id);
    
    int updateDetectDeviceInfoById(@Params("id") Integer id, @Params("req") UpdateDetectDeviceInfoByIdReq req);
    
    DetectDeviceInfo getDetectDeviceInfoById(Integer id);
    
    List<DetectDeviceInfo> getDetectDeviceInfoList(GetDetectDeviceInfoListReq req);   
}