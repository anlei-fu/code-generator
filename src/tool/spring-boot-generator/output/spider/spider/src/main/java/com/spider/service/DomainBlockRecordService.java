package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.DomainBlockRecord;
import com.spider.pojo.req.AddDomainBlockRecordReq;
import com.spider.pojo.req.GetDomainBlockRecordListReq;
import com.spider.pojo.req.UpdateDomainBlockRecordByIdReq;


public interface DomainBlockRecordService {

    boolean addDomainBlockRecord(AddDomainBlockRecordReq req);
    
    boolean deleteDomainBlockRecordById(Integer id);
    
    boolean updateDomainBlockRecordById(Integer id, UpdateDomainBlockRecordByIdReq req);
    
    DomainBlockRecord getDomainBlockRecordById(Integer id);
    
    PageInfo<DomainBlockRecord> getDomainBlockRecordList(GetDomainBlockRecordListReq req);

}