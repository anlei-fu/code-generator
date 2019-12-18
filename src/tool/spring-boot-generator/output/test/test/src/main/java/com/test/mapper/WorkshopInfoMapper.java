package com.undefined.mapper;

import com.undefined.pojo.entity.WorkshopInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface WorkshopInfoMapper {
        
    int addWorkshopInfo(AddWorkshopInfoReq req);
    
    int deleteWorkshopInfoById(Integer id);
    
    int updateWorkshopInfoById(@Params("id") Integer id, @Params("req") UpdateWorkshopInfoByIdReq req);
    
    WorkshopInfo getWorkshopInfoById(Integer id);
    
    List<WorkshopInfo> getWorkshopInfoList(GetWorkshopInfoListReq req);   
}