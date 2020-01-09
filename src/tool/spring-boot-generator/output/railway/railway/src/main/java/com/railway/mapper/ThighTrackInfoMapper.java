package com.railway.mapper;

import com.railway.pojo.entity.ThighTrackInfo;
import com.railway.pojo.param.UpdateThighTrackInfoByIdParams;
import com.railway.pojo.req.AddThighTrackInfoReq;
import com.railway.pojo.req.GetThighTrackInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface ThighTrackInfoMapper {

    int addThighTrackInfo(AddThighTrackInfoReq req);

    int deleteThighTrackInfoById(@Param("id") Integer id);

    int updateThighTrackInfoById(UpdateThighTrackInfoByIdParams params);

    ThighTrackInfo getThighTrackInfoById(@Param("id") Integer id);

    List<ThighTrackInfo> getThighTrackInfoList(GetThighTrackInfoListReq req);

}
