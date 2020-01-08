package com.railway.mapper;

import com.railway.pojo.entity.DetectGroup;
import com.railway.pojo.params.UpdateDetectGroupByIdParams;
import com.railway.pojo.req.AddDetectGroupReq;
import com.railway.pojo.req.GetDetectGroupListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DetectGroupMapper {
        
    int addDetectGroup(AddDetectGroupReq req);
    
        int deleteDetectGroupById(@Params("id") Integer id);
    
        int updateDetectGroupById(UpdateDetectGroupByIdParams params);
    
        DetectGroup getDetectGroupById(@Params("id") Integer id);
    
        List<DetectGroup> getDetectGroupList(GetDetectGroupListReq req);
   
}