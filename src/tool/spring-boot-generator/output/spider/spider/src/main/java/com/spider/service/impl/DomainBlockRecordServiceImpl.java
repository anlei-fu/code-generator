package com.spider.service.impl;

import com.github.pagehelper.PageInfo;
import com.spider.mapper.DomainBlockRecordMapper;
import com.spider.pojo.entity.DomainBlockRecord;
import com.spider.pojo.entity.DomainBlockRecord;
import com.spider.pojo.req.AddDomainBlockRecordReq;
import com.spider.pojo.req.GetDomainBlockRecordListReq;
import com.spider.pojo.req.UpdateDomainBlockRecordByIdReq;
import com.spider.service.DomainBlockRecordService;
import com.spider.utils.PageHelperUtils;
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
        params params = new UpdateDomainBlockRecordByIdParams(id, req)
        return domainBlockRecordMapper.updateDomainBlockRecordById(params) > 0;
    }

    @Override
    public DomainBlockRecord getDomainBlockRecordById(Integer id) {
        return domainBlockRecordMapper.getDomainBlockRecordById(id);
    }

    @Override
    public PageInfo<DomainBlockRecord> getDomainBlockRecordList(GetDomainBlockRecordListReq req) {
        return PageHelperUtils.page(()=> domainBlockRecordMapper.getDomainBlockRecordList(req));
    }

}
