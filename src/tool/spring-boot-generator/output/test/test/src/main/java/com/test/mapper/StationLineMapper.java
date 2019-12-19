package com.test.mapper;

import com.test.pojo.req.AddStationLineReq;
import com.test.pojo.req.GetStationLineListReq;
import com.test.pojo.req.UpdateStationLineByIdReq;
import com.test.pojo.entity.StationLine;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface StationLineMapper {
        
    int addStationLine(AddStationLineReq req);
    
    int deleteStationLineById(Integer id);
    
    int updateStationLineById(@Params("id") Integer id, @Params("req") UpdateStationLineByIdReq req);
    
    StationLine getStationLineById(Integer id);
    
    List<StationLine> getStationLineList(GetStationLineListReq req);   
}