package com.undefined.service.impl;

import com.undefined.mapper.SiteInfoMapper;
import com.undefined.pojo.entity.SiteInfo;
import com.spider.service.SiteInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SiteInfoServiceImpl implements SiteInfoService {

    @Autowired
    private SiteInfoMapper siteInfoMapper;

    @Override
    public boolean addSiteInfo(AddSiteInfoReq req) {
        return siteInfoMapper.addSiteInfo(req) > 0;
    }


    @Override
    public boolean deleteSiteInfoById(Integer id) {
        return siteInfoMapper.deleteSiteInfoById(id) > 0;
    }


    @Override
    public boolean updateSiteInfoById(Integer id, UpdateSiteInfoByIdReq req) {
        return siteInfoMapper.updateSiteInfoById(id, req) > 0;
    }


    @Override
    public SiteInfo getSiteInfoById(Integer id) {
        return siteInfoMapper.getSiteInfoById(id);
    }


    @Override
    public PageInfo<SiteInfo> getSiteInfoList(GetSiteInfoListReq req) {
        return siteInfoMapper.getSiteInfoList(req);
    }
}
