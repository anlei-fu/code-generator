package com.railway.mapper;

import com.railway.pojo.entity.TurnoutInfo;
import com.railway.pojo.param.UpdateTurnoutInfoByIdParams;
import com.railway.pojo.req.AddTurnoutInfoReq;
import com.railway.pojo.req.GetTurnoutInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface TurnoutInfoMapper {

    int addTurnoutInfo(AddTurnoutInfoReq req);

    int deleteTurnoutInfoById(@Param("id") Integer id);

    int updateTurnoutInfoById(UpdateTurnoutInfoByIdParams params);

    TurnoutInfo getTurnoutInfoById(@Param("id") Integer id);

    List<TurnoutInfo> getTurnoutInfoList(GetTurnoutInfoListReq req);

}
