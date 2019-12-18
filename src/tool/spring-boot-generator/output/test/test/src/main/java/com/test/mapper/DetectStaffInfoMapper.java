package com.undefined.mapper;

import com.undefined.pojo.entity.DetectStaffInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DetectStaffInfoMapper {
        
    int addDetectStaffInfo(AddDetectStaffInfoReq req);
    
    int deleteDetectStaffInfoById(Integer id);
    
    int updateDetectStaffInfoById(@Params("id") Integer id, @Params("req") UpdateDetectStaffInfoByIdReq req);
    
    DetectStaffInfo getDetectStaffInfoById(Integer id);
    
    List<DetectStaffInfo> getDetectStaffInfoList(GetDetectStaffInfoListReq req);   
}