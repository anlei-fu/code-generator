package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.DomainInfo;
import com.spider.pojo.req.AddDomainInfoReq;
import com.spider.pojo.req.GetDomainInfoListReq;
import com.spider.pojo.req.UpdateDomainInfoByIdReq;


public interface DomainInfoService {

    boolean addDomainInfo(AddDomainInfoReq req);
    
    boolean deleteDomainInfoById(Integer id);
    
    boolean updateDomainInfoById(Integer id, UpdateDomainInfoByIdReq req);
    
    DomainInfo getDomainInfoById(Integer id);
    
    PageInfo<DomainInfo> getDomainInfoList(GetDomainInfoListReq req);

}