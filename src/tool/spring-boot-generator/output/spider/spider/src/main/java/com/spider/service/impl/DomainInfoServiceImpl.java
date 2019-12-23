package com.spider.service.impl;

import com.github.pagehelper.PageInfo;
import com.spider.mapper.DomainInfoMapper;
import com.spider.pojo.entity.DomainInfo;
import com.spider.pojo.entity.DomainInfo;
import com.spider.pojo.req.AddDomainInfoReq;
import com.spider.pojo.req.GetDomainInfoListReq;
import com.spider.pojo.req.UpdateDomainInfoByIdReq;
import com.spider.service.DomainInfoService;
import com.spider.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DomainInfoServiceImpl implements DomainInfoService {

    @Autowired
    private DomainInfoMapper domainInfoMapper;

    @Override
    public boolean addDomainInfo(AddDomainInfoReq req) {
        return domainInfoMapper.addDomainInfo(req) > 0;
    }

    @Override
    public boolean deleteDomainInfoById(Integer id) {
        return domainInfoMapper.deleteDomainInfoById(id) > 0;
    }

    @Override
    public boolean updateDomainInfoById(Integer id, UpdateDomainInfoByIdReq req) {
        return domainInfoMapper.updateDomainInfoById(id, req) > 0;
    }

    @Override
    public DomainInfo getDomainInfoById(Integer id) {
        return domainInfoMapper.getDomainInfoById(id);
    }

    @Override
    public PageInfo<DomainInfo> getDomainInfoList(GetDomainInfoListReq req) {
        return domainInfoMapper.getDomainInfoList(req);
    }

}
