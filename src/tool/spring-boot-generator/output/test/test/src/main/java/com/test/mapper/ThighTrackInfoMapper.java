package com.undefined.mapper;

import com.undefined.pojo.entity.ThighTrackInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ThighTrackInfoMapper {
        
    int addThighTrackInfo(AddThighTrackInfoReq req);
    
    int deleteThighTrackInfoById(Integer id);
    
    int updateThighTrackInfoById(@Params("id") Integer id, @Params("req") UpdateThighTrackInfoByIdReq req);
    
    ThighTrackInfo getThighTrackInfoById(Integer id);
    
    List<ThighTrackInfo> getThighTrackInfoList(GetThighTrackInfoListReq req);   
}