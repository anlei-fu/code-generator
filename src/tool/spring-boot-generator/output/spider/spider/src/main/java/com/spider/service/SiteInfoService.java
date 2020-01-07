package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.SiteInfo;
import com.spider.pojo.req.AddSiteInfoReq;
import com.spider.pojo.req.GetSiteInfoListReq;
import com.spider.pojo.req.UpdateSiteInfoByIdReq;


public interface SiteInfoService {

    boolean addSiteInfo(AddSiteInfoReq req);
    
    boolean deleteSiteInfoById(Integer id);
    
    boolean updateSiteInfoById(Integer id, UpdateSiteInfoByIdReq req);
    
    SiteInfo getSiteInfoById(Integer id);
    
    PageInfo<SiteInfo> getSiteInfoList(GetSiteInfoListReq req);

}