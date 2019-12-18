package com.undefined.service;

import com.undefined.pojo.entity.SiteInfo;

public interface SiteInfoService {

    boolean addSiteInfo(AddSiteInfoReq req);

    boolean deleteSiteInfoById(Integer id);

    boolean updateSiteInfoById(Integer id, UpdateSiteInfoByIdReq req);

    SiteInfo getSiteInfoById(Integer id);

    PageInfo<SiteInfo> getSiteInfoList(GetSiteInfoListReq req);
}