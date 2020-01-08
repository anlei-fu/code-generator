package com.railway.mapper;

import com.railway.pojo.entity.DetectDeviceInfo;
import com.railway.pojo.params.UpdateDetectDeviceInfoByIdParams;
import com.railway.pojo.req.AddDetectDeviceInfoReq;
import com.railway.pojo.req.GetDetectDeviceInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DetectDeviceInfoMapper {
        
    int addDetectDeviceInfo(AddDetectDeviceInfoReq req);
    
        int deleteDetectDeviceInfoById(@Params("id") Integer id);
    
        int updateDetectDeviceInfoById(UpdateDetectDeviceInfoByIdParams params);
    
        DetectDeviceInfo getDetectDeviceInfoById(@Params("id") Integer id);
    
        List<DetectDeviceInfo> getDetectDeviceInfoList(GetDetectDeviceInfoListReq req);
   
}