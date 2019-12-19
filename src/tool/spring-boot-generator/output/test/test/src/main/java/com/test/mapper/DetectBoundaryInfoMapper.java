package com.test.mapper;

import com.test.pojo.req.AddDetectBoundaryInfoReq;
import com.test.pojo.req.GetDetectBoundaryInfoListReq;
import com.test.pojo.req.UpdateDetectBoundaryInfoByIdReq;
import com.test.pojo.entity.DetectBoundaryInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DetectBoundaryInfoMapper {
        
    int addDetectBoundaryInfo(AddDetectBoundaryInfoReq req);
    
    int deleteDetectBoundaryInfoById(Integer id);
    
    int updateDetectBoundaryInfoById(@Params("id") Integer id, @Params("req") UpdateDetectBoundaryInfoByIdReq req);
    
    DetectBoundaryInfo getDetectBoundaryInfoById(Integer id);
    
    List<DetectBoundaryInfo> getDetectBoundaryInfoList(GetDetectBoundaryInfoListReq req);   
}