package com.undefined.service;

import com.undefined.pojo.entity.DomainBlockRecord;

public interface DomainBlockRecordService {

    boolean addDomainBlockRecord(AddDomainBlockRecordReq req);

    boolean deleteDomainBlockRecordById(Integer id);

    boolean updateDomainBlockRecordById(Integer id, UpdateDomainBlockRecordByIdReq req);

    DomainBlockRecord getDomainBlockRecordById(Integer id);

    PageInfo<DomainBlockRecord> getDomainBlockRecordList(GetDomainBlockRecordListReq req);
}