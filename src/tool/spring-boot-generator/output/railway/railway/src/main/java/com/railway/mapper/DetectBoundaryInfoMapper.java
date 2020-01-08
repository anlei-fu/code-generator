package com.railway.mapper;

import com.railway.pojo.entity.DetectBoundaryInfo;
import com.railway.pojo.params.UpdateDetectBoundaryInfoByIdParams;
import com.railway.pojo.req.AddDetectBoundaryInfoReq;
import com.railway.pojo.req.GetDetectBoundaryInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DetectBoundaryInfoMapper {
        
    int addDetectBoundaryInfo(AddDetectBoundaryInfoReq req);
    
        int deleteDetectBoundaryInfoById(@Params("id") Integer id);
    
        int updateDetectBoundaryInfoById(UpdateDetectBoundaryInfoByIdParams params);
    
        DetectBoundaryInfo getDetectBoundaryInfoById(@Params("id") Integer id);
    
        List<DetectBoundaryInfo> getDetectBoundaryInfoList(GetDetectBoundaryInfoListReq req);
   
}