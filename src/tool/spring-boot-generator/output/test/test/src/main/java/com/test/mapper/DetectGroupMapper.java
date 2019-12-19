package com.test.mapper;

import com.test.pojo.req.AddDetectGroupReq;
import com.test.pojo.req.GetDetectGroupListReq;
import com.test.pojo.req.UpdateDetectGroupByIdReq;
import com.test.pojo.entity.DetectGroup;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DetectGroupMapper {
        
    int addDetectGroup(AddDetectGroupReq req);
    
    int deleteDetectGroupById(Integer id);
    
    int updateDetectGroupById(@Params("id") Integer id, @Params("req") UpdateDetectGroupByIdReq req);
    
    DetectGroup getDetectGroupById(Integer id);
    
    List<DetectGroup> getDetectGroupList(GetDetectGroupListReq req);   
}