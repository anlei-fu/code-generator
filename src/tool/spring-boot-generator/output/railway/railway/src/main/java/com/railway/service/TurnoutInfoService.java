package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.TurnoutInfo;
import com.railway.pojo.req.AddTurnoutInfoReq;
import com.railway.pojo.req.GetTurnoutInfoListReq;
import com.railway.pojo.req.UpdateTurnoutInfoByIdReq;

public interface TurnoutInfoService {

    boolean addTurnoutInfo(AddTurnoutInfoReq req);

    boolean deleteTurnoutInfoById(Integer id);

    boolean updateTurnoutInfoById(Integer id, UpdateTurnoutInfoByIdReq req);

    TurnoutInfo getTurnoutInfoById(Integer id);

    PageInfo<TurnoutInfo> getTurnoutInfoList(GetTurnoutInfoListReq req);

}
