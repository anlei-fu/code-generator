package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DealRecord;
import com.railway.pojo.req.AddDealRecordReq;
import com.railway.pojo.req.GetDealRecordListReq;
import com.railway.pojo.req.UpdateDealRecordByIdReq;


public interface DealRecordService {

    boolean addDealRecord(AddDealRecordReq req);
    
    boolean deleteDealRecordById(Integer id);
    
    boolean updateDealRecordById(Integer id, UpdateDealRecordByIdReq req);
    
    DealRecord getDealRecordById(Integer id);
    
    PageInfo<DealRecord> getDealRecordList(GetDealRecordListReq req);

}