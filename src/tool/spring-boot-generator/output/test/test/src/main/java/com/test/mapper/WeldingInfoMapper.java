package com.undefined.mapper;

import com.undefined.pojo.entity.WeldingInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface WeldingInfoMapper {
        
    int addWeldingInfo(AddWeldingInfoReq req);
    
    int deleteWeldingInfoById(Integer id);
    
    int updateWeldingInfoById(@Params("id") Integer id, @Params("req") UpdateWeldingInfoByIdReq req);
    
    WeldingInfo getWeldingInfoById(Integer id);
    
    List<WeldingInfo> getWeldingInfoList(GetWeldingInfoListReq req);   
}