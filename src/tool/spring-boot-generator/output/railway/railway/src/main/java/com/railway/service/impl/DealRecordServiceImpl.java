package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DealRecordMapper;
import com.railway.pojo.entity.DealRecord;
import com.railway.pojo.entity.DealRecord;
import com.railway.pojo.param.UpdateDealRecordByIdParams;
import com.railway.pojo.req.AddDealRecordReq;
import com.railway.pojo.req.GetDealRecordListReq;
import com.railway.pojo.req.UpdateDealRecordByIdReq;
import com.railway.service.DealRecordService;
import com.railway.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DealRecordServiceImpl implements DealRecordService {

    @Autowired
    private DealRecordMapper dealRecordMapper;

    @Override
    public boolean addDealRecord(AddDealRecordReq req) {
        return dealRecordMapper.addDealRecord(req) > 0;
    }

    @Override
    public boolean deleteDealRecordById(Integer id) {
        return dealRecordMapper.deleteDealRecordById(id) > 0;
    }

    @Override
    public boolean updateDealRecordById(Integer id, UpdateDealRecordByIdReq req) {
        UpdateDealRecordByIdParams params = new UpdateDealRecordByIdParams(id, req);
        return dealRecordMapper.updateDealRecordById(params) > 0;
    }

    @Override
    public DealRecord getDealRecordById(Integer id) {
        return dealRecordMapper.getDealRecordById(id);
    }

    @Override
    public PageInfo<DealRecord> getDealRecordList(GetDealRecordListReq req) {
        return PageHelperUtils.paging(req, () -> dealRecordMapper.getDealRecordList(req));
    }

}

