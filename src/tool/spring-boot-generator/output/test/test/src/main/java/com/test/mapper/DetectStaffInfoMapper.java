package com.test.mapper;

import com.test.pojo.req.AddDetectStaffInfoReq;
import com.test.pojo.req.GetDetectStaffInfoListReq;
import com.test.pojo.req.UpdateDetectStaffInfoByIdReq;
import com.test.pojo.entity.DetectStaffInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DetectStaffInfoMapper {
        
    int addDetectStaffInfo(AddDetectStaffInfoReq req);
    
    int deleteDetectStaffInfoById(Integer id);
    
    int updateDetectStaffInfoById(@Params("id") Integer id, @Params("req") UpdateDetectStaffInfoByIdReq req);
    
    DetectStaffInfo getDetectStaffInfoById(Integer id);
    
    List<DetectStaffInfo> getDetectStaffInfoList(GetDetectStaffInfoListReq req);   
}