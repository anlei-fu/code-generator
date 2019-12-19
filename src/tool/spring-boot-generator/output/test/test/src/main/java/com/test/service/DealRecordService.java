package com.test.service;

import com.test.pojo.entity.DealRecord;
import com.test.pojo.req.AddDealRecordReq;
import com.test.pojo.req.GetDealRecordListReq;
import com.test.pojo.req.UpdateDealRecordByIdReq;
import com.github.pagehelper.PageInfo;


public interface DealRecordService {

    boolean addDealRecord(AddDealRecordReq req);

    boolean deleteDealRecordById(Integer id);

    boolean updateDealRecordById(Integer id, UpdateDealRecordByIdReq req);

    DealRecord getDealRecordById(Integer id);

    PageInfo<DealRecord> getDealRecordList(GetDealRecordListReq req);
}