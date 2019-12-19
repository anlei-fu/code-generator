package com.test.mapper;

import com.test.pojo.req.AddDetectStaffInfoCopyReq;
import com.test.pojo.req.GetDetectStaffInfoCopyListReq;
import com.test.pojo.req.UpdateDetectStaffInfoCopyByIdReq;
import com.test.pojo.entity.DetectStaffInfoCopy;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DetectStaffInfoCopyMapper {
        
    int addDetectStaffInfoCopy(AddDetectStaffInfoCopyReq req);
    
    int deleteDetectStaffInfoCopyById(Integer id);
    
    int updateDetectStaffInfoCopyById(@Params("id") Integer id, @Params("req") UpdateDetectStaffInfoCopyByIdReq req);
    
    DetectStaffInfoCopy getDetectStaffInfoCopyById(Integer id);
    
    List<DetectStaffInfoCopy> getDetectStaffInfoCopyList(GetDetectStaffInfoCopyListReq req);   
}