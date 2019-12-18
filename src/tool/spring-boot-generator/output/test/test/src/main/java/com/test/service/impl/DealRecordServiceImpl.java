package com.undefined.service.impl;

import com.undefined.mapper.DealRecordMapper;
import com.undefined.pojo.entity.DealRecord;
import com.spider.service.DealRecordService;
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
        return dealRecordMapper.updateDealRecordById(id, req) > 0;
    }


    @Override
    public DealRecord getDealRecordById(Integer id) {
        return dealRecordMapper.getDealRecordById(id);
    }


    @Override
    public PageInfo<DealRecord> getDealRecordList(GetDealRecordListReq req) {
        return dealRecordMapper.getDealRecordList(req);
    }
}
