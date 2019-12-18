package com.undefined.mapper;

import com.undefined.pojo.entity.SiteInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface SiteInfoMapper {
        
    int addSiteInfo(AddSiteInfoReq req);
    
    int deleteSiteInfoById(Integer id);
    
    int updateSiteInfoById(@Params("id") Integer id, @Params("req") UpdateSiteInfoByIdReq req);
    
    SiteInfo getSiteInfoById(Integer id);
    
    List<SiteInfo> getSiteInfoList(GetSiteInfoListReq req);   
}