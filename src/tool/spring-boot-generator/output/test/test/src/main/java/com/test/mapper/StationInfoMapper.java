package com.undefined.mapper;

import com.undefined.pojo.entity.StationInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface StationInfoMapper {
        
    int addStationInfo(AddStationInfoReq req);
    
    int deleteStationInfoById(Integer id);
    
    int updateStationInfoById(@Params("id") Integer id, @Params("req") UpdateStationInfoByIdReq req);
    
    StationInfo getStationInfoById(Integer id);
    
    List<StationInfo> getStationInfoList(GetStationInfoListReq req);   
}