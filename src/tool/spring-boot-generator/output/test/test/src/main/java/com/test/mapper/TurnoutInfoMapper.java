package com.undefined.mapper;

import com.undefined.pojo.entity.TurnoutInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TurnoutInfoMapper {
        
    int addTurnoutInfo(AddTurnoutInfoReq req);
    
    int deleteTurnoutInfoById(Integer id);
    
    int updateTurnoutInfoById(@Params("id") Integer id, @Params("req") UpdateTurnoutInfoByIdReq req);
    
    TurnoutInfo getTurnoutInfoById(Integer id);
    
    List<TurnoutInfo> getTurnoutInfoList(GetTurnoutInfoListReq req);   
}