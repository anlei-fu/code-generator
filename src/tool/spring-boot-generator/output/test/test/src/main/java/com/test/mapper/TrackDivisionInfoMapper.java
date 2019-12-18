package com.undefined.mapper;

import com.undefined.pojo.entity.TrackDivisionInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TrackDivisionInfoMapper {
        
    int addTrackDivisionInfo(AddTrackDivisionInfoReq req);
    
    int deleteTrackDivisionInfoById(Integer id);
    
    int updateTrackDivisionInfoById(@Params("id") Integer id, @Params("req") UpdateTrackDivisionInfoByIdReq req);
    
    TrackDivisionInfo getTrackDivisionInfoById(Integer id);
    
    List<TrackDivisionInfo> getTrackDivisionInfoList(GetTrackDivisionInfoListReq req);   
}