package com.undefined.mapper;

import com.undefined.pojo.entity.StationLine;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface StationLineMapper {
        
    int addStationLine(AddStationLineReq req);
    
    int deleteStationLineById(Integer id);
    
    int updateStationLineById(@Params("id") Integer id, @Params("req") UpdateStationLineByIdReq req);
    
    StationLine getStationLineById(Integer id);
    
    List<StationLine> getStationLineList(GetStationLineListReq req);   
}