package com.spider.mapper;

import com.spider.pojo.entity.DomainInfo;
import com.spider.pojo.req.AddDomainInfoReq;
import com.spider.pojo.req.GetDomainInfoListReq;
import com.spider.pojo.req.UpdateDomainInfoByIdReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DomainInfoMapper {
        
    int addDomainInfo(AddDomainInfoReq req);
    
        int deleteDomainInfoById(@Params("id") Integer id);
    
        int updateDomainInfoById(@Params("id") Integer id, @Params("req") UpdateDomainInfoByIdReq req);
    
        DomainInfo getDomainInfoById(@Params("id") Integer id);
    
        List<DomainInfo> getDomainInfoList(GetDomainInfoListReq req);
   
}