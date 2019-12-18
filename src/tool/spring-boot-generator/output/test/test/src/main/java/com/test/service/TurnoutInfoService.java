package com.undefined.service;

import com.undefined.pojo.entity.TurnoutInfo;

public interface TurnoutInfoService {

    boolean addTurnoutInfo(AddTurnoutInfoReq req);

    boolean deleteTurnoutInfoById(Integer id);

    boolean updateTurnoutInfoById(Integer id, UpdateTurnoutInfoByIdReq req);

    TurnoutInfo getTurnoutInfoById(Integer id);

    PageInfo<TurnoutInfo> getTurnoutInfoList(GetTurnoutInfoListReq req);
}