package com.undefined.service;

import com.undefined.pojo.entity.DomainInfo;

public interface DomainInfoService {

    boolean addDomainInfo(AddDomainInfoReq req);

    boolean deleteDomainInfoById(Integer id);

    boolean updateDomainInfoById(Integer id, UpdateDomainInfoByIdReq req);

    DomainInfo getDomainInfoById(Integer id);

    PageInfo<DomainInfo> getDomainInfoList(GetDomainInfoListReq req);
}