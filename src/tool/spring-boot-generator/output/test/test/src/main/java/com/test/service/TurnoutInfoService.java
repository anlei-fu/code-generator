package com.test.service;

import com.test.pojo.entity.TurnoutInfo;
import com.test.pojo.req.AddTurnoutInfoReq;
import com.test.pojo.req.GetTurnoutInfoListReq;
import com.test.pojo.req.UpdateTurnoutInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface TurnoutInfoService {

    boolean addTurnoutInfo(AddTurnoutInfoReq req);

    boolean deleteTurnoutInfoById(Integer id);

    boolean updateTurnoutInfoById(Integer id, UpdateTurnoutInfoByIdReq req);

    TurnoutInfo getTurnoutInfoById(Integer id);

    PageInfo<TurnoutInfo> getTurnoutInfoList(GetTurnoutInfoListReq req);
}