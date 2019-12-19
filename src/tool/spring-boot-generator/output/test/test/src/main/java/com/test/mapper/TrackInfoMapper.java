package com.test.mapper;

import com.test.pojo.req.AddTrackInfoReq;
import com.test.pojo.req.GetTrackInfoListReq;
import com.test.pojo.req.UpdateTrackInfoByIdReq;
import com.test.pojo.entity.TrackInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TrackInfoMapper {
        
    int addTrackInfo(AddTrackInfoReq req);
    
    int deleteTrackInfoById(Integer id);
    
    int updateTrackInfoById(@Params("id") Integer id, @Params("req") UpdateTrackInfoByIdReq req);
    
    TrackInfo getTrackInfoById(Integer id);
    
    List<TrackInfo> getTrackInfoList(GetTrackInfoListReq req);   
}