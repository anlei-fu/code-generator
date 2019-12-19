package com.test.mapper;

import com.test.pojo.req.AddThighTrackInfoReq;
import com.test.pojo.req.GetThighTrackInfoListReq;
import com.test.pojo.req.UpdateThighTrackInfoByIdReq;
import com.test.pojo.entity.ThighTrackInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface ThighTrackInfoMapper {
        
    int addThighTrackInfo(AddThighTrackInfoReq req);
    
    int deleteThighTrackInfoById(Integer id);
    
    int updateThighTrackInfoById(@Params("id") Integer id, @Params("req") UpdateThighTrackInfoByIdReq req);
    
    ThighTrackInfo getThighTrackInfoById(Integer id);
    
    List<ThighTrackInfo> getThighTrackInfoList(GetThighTrackInfoListReq req);   
}