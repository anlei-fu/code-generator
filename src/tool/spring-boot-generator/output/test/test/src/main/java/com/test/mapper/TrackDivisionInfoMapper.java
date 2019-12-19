package com.test.mapper;

import com.test.pojo.req.AddTrackDivisionInfoReq;
import com.test.pojo.req.GetTrackDivisionInfoListReq;
import com.test.pojo.req.UpdateTrackDivisionInfoByIdReq;
import com.test.pojo.entity.TrackDivisionInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TrackDivisionInfoMapper {
        
    int addTrackDivisionInfo(AddTrackDivisionInfoReq req);
    
    int deleteTrackDivisionInfoById(Integer id);
    
    int updateTrackDivisionInfoById(@Params("id") Integer id, @Params("req") UpdateTrackDivisionInfoByIdReq req);
    
    TrackDivisionInfo getTrackDivisionInfoById(Integer id);
    
    List<TrackDivisionInfo> getTrackDivisionInfoList(GetTrackDivisionInfoListReq req);   
}