package com.railway.mapper;

import com.railway.pojo.entity.StationLine;
import com.railway.pojo.param.UpdateStationLineByIdParams;
import com.railway.pojo.req.AddStationLineReq;
import com.railway.pojo.req.GetStationLineListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface StationLineMapper {

    int addStationLine(AddStationLineReq req);

    int deleteStationLineById(@Param("id") Integer id);

    int updateStationLineById(UpdateStationLineByIdParams params);

    StationLine getStationLineById(@Param("id") Integer id);

    List<StationLine> getStationLineList(GetStationLineListReq req);

}
