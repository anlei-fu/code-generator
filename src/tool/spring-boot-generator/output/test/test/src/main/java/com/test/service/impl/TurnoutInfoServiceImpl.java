package com.test.service.impl;

import com.test.pojo.req.AddTurnoutInfoReq;
import com.test.pojo.req.GetTurnoutInfoListReq;
import com.test.pojo.req.UpdateTurnoutInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.TurnoutInfoMapper;
import com.test.pojo.entity.TurnoutInfo;
import com.test.service.TurnoutInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TurnoutInfoServiceImpl implements TurnoutInfoService {

    @Autowired
    private TurnoutInfoMapper turnoutInfoMapper;

    @Override
    public boolean addTurnoutInfo(AddTurnoutInfoReq req) {
        return turnoutInfoMapper.addTurnoutInfo(req) > 0;
    }


    @Override
    public boolean deleteTurnoutInfoById(Integer id) {
        return turnoutInfoMapper.deleteTurnoutInfoById(id) > 0;
    }


    @Override
    public boolean updateTurnoutInfoById(Integer id, UpdateTurnoutInfoByIdReq req) {
        return turnoutInfoMapper.updateTurnoutInfoById(id, req) > 0;
    }


    @Override
    public TurnoutInfo getTurnoutInfoById(Integer id) {
        return turnoutInfoMapper.getTurnoutInfoById(id);
    }


    @Override
    public PageInfo<TurnoutInfo> getTurnoutInfoList(GetTurnoutInfoListReq req) {
        return turnoutInfoMapper.getTurnoutInfoList(req);
    }
}
