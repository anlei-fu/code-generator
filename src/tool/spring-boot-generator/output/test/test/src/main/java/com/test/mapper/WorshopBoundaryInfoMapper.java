package com.undefined.mapper;

import com.undefined.pojo.entity.WorshopBoundaryInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface WorshopBoundaryInfoMapper {
        
    int addWorshopBoundaryInfo(AddWorshopBoundaryInfoReq req);
    
    int deleteWorshopBoundaryInfoById(Integer id);
    
    int updateWorshopBoundaryInfoById(@Params("id") Integer id, @Params("req") UpdateWorshopBoundaryInfoByIdReq req);
    
    WorshopBoundaryInfo getWorshopBoundaryInfoById(Integer id);
    
    List<WorshopBoundaryInfo> getWorshopBoundaryInfoList(GetWorshopBoundaryInfoListReq req);   
}