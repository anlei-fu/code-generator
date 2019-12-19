package com.test.mapper;

import com.test.pojo.req.AddTurnoutInfoReq;
import com.test.pojo.req.GetTurnoutInfoListReq;
import com.test.pojo.req.UpdateTurnoutInfoByIdReq;
import com.test.pojo.entity.TurnoutInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TurnoutInfoMapper {
        
    int addTurnoutInfo(AddTurnoutInfoReq req);
    
    int deleteTurnoutInfoById(Integer id);
    
    int updateTurnoutInfoById(@Params("id") Integer id, @Params("req") UpdateTurnoutInfoByIdReq req);
    
    TurnoutInfo getTurnoutInfoById(Integer id);
    
    List<TurnoutInfo> getTurnoutInfoList(GetTurnoutInfoListReq req);   
}