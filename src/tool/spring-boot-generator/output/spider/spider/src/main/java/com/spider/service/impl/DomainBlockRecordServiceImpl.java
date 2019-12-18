package com.undefined.service.impl;

import com.undefined.mapper.DomainBlockRecordMapper;
import com.undefined.pojo.entity.DomainBlockRecord;
import com.spider.service.DomainBlockRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DomainBlockRecordServiceImpl implements DomainBlockRecordService {

    @Autowired
    private DomainBlockRecordMapper domainBlockRecordMapper;

    @Override
    public boolean addDomainBlockRecord(AddDomainBlockRecordReq req) {
        return domainBlockRecordMapper.addDomainBlockRecord(req) > 0;
    }


    @Override
    public boolean deleteDomainBlockRecordById(Integer id) {
        return domainBlockRecordMapper.deleteDomainBlockRecordById(id) > 0;
    }


    @Override
    public boolean updateDomainBlockRecordById(Integer id, UpdateDomainBlockRecordByIdReq req) {
        return domainBlockRecordMapper.updateDomainBlockRecordById(id, req) > 0;
    }


    @Override
    public DomainBlockRecord getDomainBlockRecordById(Integer id) {
        return domainBlockRecordMapper.getDomainBlockRecordById(id);
    }


    @Override
    public PageInfo<DomainBlockRecord> getDomainBlockRecordList(GetDomainBlockRecordListReq req) {
        return domainBlockRecordMapper.getDomainBlockRecordList(req);
    }
}
