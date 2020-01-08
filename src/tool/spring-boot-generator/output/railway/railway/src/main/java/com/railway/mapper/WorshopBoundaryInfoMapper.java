package com.railway.mapper;

import com.railway.pojo.entity.WorshopBoundaryInfo;
import com.railway.pojo.params.UpdateWorshopBoundaryInfoByIdParams;
import com.railway.pojo.req.AddWorshopBoundaryInfoReq;
import com.railway.pojo.req.GetWorshopBoundaryInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface WorshopBoundaryInfoMapper {
        
    int addWorshopBoundaryInfo(AddWorshopBoundaryInfoReq req);
    
        int deleteWorshopBoundaryInfoById(@Params("id") Integer id);
    
        int updateWorshopBoundaryInfoById(UpdateWorshopBoundaryInfoByIdParams params);
    
        WorshopBoundaryInfo getWorshopBoundaryInfoById(@Params("id") Integer id);
    
        List<WorshopBoundaryInfo> getWorshopBoundaryInfoList(GetWorshopBoundaryInfoListReq req);
   
}