package com.railway.mapper;

import com.railway.pojo.entity.StationInfo;
import com.railway.pojo.params.UpdateStationInfoByIdParams;
import com.railway.pojo.req.AddStationInfoReq;
import com.railway.pojo.req.GetStationInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface StationInfoMapper {
        
    int addStationInfo(AddStationInfoReq req);
    
        int deleteStationInfoById(@Params("id") Integer id);
    
        int updateStationInfoById(UpdateStationInfoByIdParams params);
    
        StationInfo getStationInfoById(@Params("id") Integer id);
    
        List<StationInfo> getStationInfoList(GetStationInfoListReq req);
   
}