package com.spider.mapper;

import com.spider.pojo.entity.SiteInfo;
import com.spider.pojo.params.UpdateSiteInfoByIdParams;
import com.spider.pojo.req.AddSiteInfoReq;
import com.spider.pojo.req.GetSiteInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface SiteInfoMapper {
        
    int addSiteInfo(AddSiteInfoReq req);
    
        int deleteSiteInfoById(@Params("id") Integer id);
    
        int updateSiteInfoById(UpdateSiteInfoByIdParams params);
    
        SiteInfo getSiteInfoById(@Params("id") Integer id);
    
        List<SiteInfo> getSiteInfoList(GetSiteInfoListReq req);
   
}