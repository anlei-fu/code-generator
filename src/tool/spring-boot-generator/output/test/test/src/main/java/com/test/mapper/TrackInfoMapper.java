package com.undefined.mapper;

import com.undefined.pojo.entity.TrackInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TrackInfoMapper {
        
    int addTrackInfo(AddTrackInfoReq req);
    
    int deleteTrackInfoById(Integer id);
    
    int updateTrackInfoById(@Params("id") Integer id, @Params("req") UpdateTrackInfoByIdReq req);
    
    TrackInfo getTrackInfoById(Integer id);
    
    List<TrackInfo> getTrackInfoList(GetTrackInfoListReq req);   
}