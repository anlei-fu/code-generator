package com.test.mapper;

import com.test.pojo.req.AddStationInfoReq;
import com.test.pojo.req.GetStationInfoListReq;
import com.test.pojo.req.UpdateStationInfoByIdReq;
import com.test.pojo.entity.StationInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface StationInfoMapper {
        
    int addStationInfo(AddStationInfoReq req);
    
    int deleteStationInfoById(Integer id);
    
    int updateStationInfoById(@Params("id") Integer id, @Params("req") UpdateStationInfoByIdReq req);
    
    StationInfo getStationInfoById(Integer id);
    
    List<StationInfo> getStationInfoList(GetStationInfoListReq req);   
}