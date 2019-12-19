package com.test.mapper;

import com.test.pojo.req.AddWorkshopInfoReq;
import com.test.pojo.req.GetWorkshopInfoListReq;
import com.test.pojo.req.UpdateWorkshopInfoByIdReq;
import com.test.pojo.entity.WorkshopInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface WorkshopInfoMapper {
        
    int addWorkshopInfo(AddWorkshopInfoReq req);
    
    int deleteWorkshopInfoById(Integer id);
    
    int updateWorkshopInfoById(@Params("id") Integer id, @Params("req") UpdateWorkshopInfoByIdReq req);
    
    WorkshopInfo getWorkshopInfoById(Integer id);
    
    List<WorkshopInfo> getWorkshopInfoList(GetWorkshopInfoListReq req);   
}