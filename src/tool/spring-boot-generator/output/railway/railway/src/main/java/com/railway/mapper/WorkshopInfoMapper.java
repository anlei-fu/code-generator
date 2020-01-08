package com.railway.mapper;

import com.railway.pojo.entity.WorkshopInfo;
import com.railway.pojo.params.UpdateWorkshopInfoByIdParams;
import com.railway.pojo.req.AddWorkshopInfoReq;
import com.railway.pojo.req.GetWorkshopInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface WorkshopInfoMapper {
        
    int addWorkshopInfo(AddWorkshopInfoReq req);
    
        int deleteWorkshopInfoById(@Params("id") Integer id);
    
        int updateWorkshopInfoById(UpdateWorkshopInfoByIdParams params);
    
        WorkshopInfo getWorkshopInfoById(@Params("id") Integer id);
    
        List<WorkshopInfo> getWorkshopInfoList(GetWorkshopInfoListReq req);
   
}