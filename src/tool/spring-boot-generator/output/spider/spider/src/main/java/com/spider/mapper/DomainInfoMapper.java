package com.undefined.mapper;

import com.undefined.pojo.entity.DomainInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DomainInfoMapper {
        
    int addDomainInfo(AddDomainInfoReq req);
    
    int deleteDomainInfoById(Integer id);
    
    int updateDomainInfoById(@Params("id") Integer id, @Params("req") UpdateDomainInfoByIdReq req);
    
    DomainInfo getDomainInfoById(Integer id);
    
    List<DomainInfo> getDomainInfoList(GetDomainInfoListReq req);   
}