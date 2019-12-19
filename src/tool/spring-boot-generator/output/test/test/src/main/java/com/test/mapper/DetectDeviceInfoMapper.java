package com.test.mapper;

import com.test.pojo.req.AddDetectDeviceInfoReq;
import com.test.pojo.req.GetDetectDeviceInfoListReq;
import com.test.pojo.req.UpdateDetectDeviceInfoByIdReq;
import com.test.pojo.entity.DetectDeviceInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DetectDeviceInfoMapper {
        
    int addDetectDeviceInfo(AddDetectDeviceInfoReq req);
    
    int deleteDetectDeviceInfoById(Integer id);
    
    int updateDetectDeviceInfoById(@Params("id") Integer id, @Params("req") UpdateDetectDeviceInfoByIdReq req);
    
    DetectDeviceInfo getDetectDeviceInfoById(Integer id);
    
    List<DetectDeviceInfo> getDetectDeviceInfoList(GetDetectDeviceInfoListReq req);   
}