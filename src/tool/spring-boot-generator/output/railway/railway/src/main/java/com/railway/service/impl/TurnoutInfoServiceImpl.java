package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.TurnoutInfoMapper;
import com.railway.pojo.entity.TurnoutInfo;
import com.railway.pojo.entity.TurnoutInfo;
import com.railway.pojo.req.AddTurnoutInfoReq;
import com.railway.pojo.req.GetTurnoutInfoListReq;
import com.railway.pojo.req.UpdateTurnoutInfoByIdReq;
import com.railway.service.TurnoutInfoService;
import com.railway.utils.PageHelperUtils;
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
        params params = new UpdateTurnoutInfoByIdParams(id, req)
        return turnoutInfoMapper.updateTurnoutInfoById(params) > 0;
    }

    @Override
    public TurnoutInfo getTurnoutInfoById(Integer id) {
        return turnoutInfoMapper.getTurnoutInfoById(id);
    }

    @Override
    public PageInfo<TurnoutInfo> getTurnoutInfoList(GetTurnoutInfoListReq req) {
        return PageHelperUtils.page(()=> turnoutInfoMapper.getTurnoutInfoList(req));
    }

}
