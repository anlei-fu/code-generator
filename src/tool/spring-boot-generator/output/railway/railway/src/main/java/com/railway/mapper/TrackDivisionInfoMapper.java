package com.railway.mapper;

import com.railway.pojo.entity.TrackDivisionInfo;
import com.railway.pojo.param.UpdateTrackDivisionInfoByIdParams;
import com.railway.pojo.req.AddTrackDivisionInfoReq;
import com.railway.pojo.req.GetTrackDivisionInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface TrackDivisionInfoMapper {

    int addTrackDivisionInfo(AddTrackDivisionInfoReq req);

    int deleteTrackDivisionInfoById(@Param("id") Integer id);

    int updateTrackDivisionInfoById(UpdateTrackDivisionInfoByIdParams params);

    TrackDivisionInfo getTrackDivisionInfoById(@Param("id") Integer id);

    List<TrackDivisionInfo> getTrackDivisionInfoList(GetTrackDivisionInfoListReq req);

}
