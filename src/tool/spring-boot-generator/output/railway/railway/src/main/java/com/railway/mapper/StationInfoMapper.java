package com.railway.mapper;

import com.railway.pojo.entity.StationInfo;
import com.railway.pojo.param.UpdateStationInfoByIdParams;
import com.railway.pojo.req.AddStationInfoReq;
import com.railway.pojo.req.GetStationInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface StationInfoMapper {

    int addStationInfo(AddStationInfoReq req);

    int deleteStationInfoById(@Param("id") Integer id);

    int updateStationInfoById(UpdateStationInfoByIdParams params);

    StationInfo getStationInfoById(@Param("id") Integer id);

    List<StationInfo> getStationInfoList(GetStationInfoListReq req);

}
