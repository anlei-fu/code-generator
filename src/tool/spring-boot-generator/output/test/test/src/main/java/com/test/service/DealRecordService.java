package com.undefined.service;

import com.undefined.pojo.entity.DealRecord;

public interface DealRecordService {

    boolean addDealRecord(AddDealRecordReq req);

    boolean deleteDealRecordById(Integer id);

    boolean updateDealRecordById(Integer id, UpdateDealRecordByIdReq req);

    DealRecord getDealRecordById(Integer id);

    PageInfo<DealRecord> getDealRecordList(GetDealRecordListReq req);
}