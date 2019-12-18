package com.undefined.mapper;

import com.undefined.pojo.entity.DetectStaffInfoCopy;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DetectStaffInfoCopyMapper {
        
    int addDetectStaffInfoCopy(AddDetectStaffInfoCopyReq req);
    
    int deleteDetectStaffInfoCopyById(Integer id);
    
    int updateDetectStaffInfoCopyById(@Params("id") Integer id, @Params("req") UpdateDetectStaffInfoCopyByIdReq req);
    
    DetectStaffInfoCopy getDetectStaffInfoCopyById(Integer id);
    
    List<DetectStaffInfoCopy> getDetectStaffInfoCopyList(GetDetectStaffInfoCopyListReq req);   
}