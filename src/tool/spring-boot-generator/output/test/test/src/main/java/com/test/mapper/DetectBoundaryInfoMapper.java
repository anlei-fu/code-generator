package com.undefined.mapper;

import com.undefined.pojo.entity.DetectBoundaryInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DetectBoundaryInfoMapper {
        
    int addDetectBoundaryInfo(AddDetectBoundaryInfoReq req);
    
    int deleteDetectBoundaryInfoById(Integer id);
    
    int updateDetectBoundaryInfoById(@Params("id") Integer id, @Params("req") UpdateDetectBoundaryInfoByIdReq req);
    
    DetectBoundaryInfo getDetectBoundaryInfoById(Integer id);
    
    List<DetectBoundaryInfo> getDetectBoundaryInfoList(GetDetectBoundaryInfoListReq req);   
}