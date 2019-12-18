package com.undefined.mapper;

import com.undefined.pojo.entity.DetectGroup;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DetectGroupMapper {
        
    int addDetectGroup(AddDetectGroupReq req);
    
    int deleteDetectGroupById(Integer id);
    
    int updateDetectGroupById(@Params("id") Integer id, @Params("req") UpdateDetectGroupByIdReq req);
    
    DetectGroup getDetectGroupById(Integer id);
    
    List<DetectGroup> getDetectGroupList(GetDetectGroupListReq req);   
}