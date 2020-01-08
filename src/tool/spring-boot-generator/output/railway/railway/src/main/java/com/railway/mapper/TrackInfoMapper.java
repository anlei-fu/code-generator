package com.railway.mapper;

import com.railway.pojo.entity.TrackInfo;
import com.railway.pojo.params.UpdateTrackInfoByIdParams;
import com.railway.pojo.req.AddTrackInfoReq;
import com.railway.pojo.req.GetTrackInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TrackInfoMapper {
        
    int addTrackInfo(AddTrackInfoReq req);
    
        int deleteTrackInfoById(@Params("id") Integer id);
    
        int updateTrackInfoById(UpdateTrackInfoByIdParams params);
    
        TrackInfo getTrackInfoById(@Params("id") Integer id);
    
        List<TrackInfo> getTrackInfoList(GetTrackInfoListReq req);
   
}