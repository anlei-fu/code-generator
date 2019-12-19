package com.test.mapper;

import com.test.pojo.req.AddWorshopBoundaryInfoReq;
import com.test.pojo.req.GetWorshopBoundaryInfoListReq;
import com.test.pojo.req.UpdateWorshopBoundaryInfoByIdReq;
import com.test.pojo.entity.WorshopBoundaryInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface WorshopBoundaryInfoMapper {
        
    int addWorshopBoundaryInfo(AddWorshopBoundaryInfoReq req);
    
    int deleteWorshopBoundaryInfoById(Integer id);
    
    int updateWorshopBoundaryInfoById(@Params("id") Integer id, @Params("req") UpdateWorshopBoundaryInfoByIdReq req);
    
    WorshopBoundaryInfo getWorshopBoundaryInfoById(Integer id);
    
    List<WorshopBoundaryInfo> getWorshopBoundaryInfoList(GetWorshopBoundaryInfoListReq req);   
}