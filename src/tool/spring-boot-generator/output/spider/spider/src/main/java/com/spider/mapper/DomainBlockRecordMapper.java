package com.undefined.mapper;

import com.undefined.pojo.entity.DomainBlockRecord;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DomainBlockRecordMapper {
        
    int addDomainBlockRecord(AddDomainBlockRecordReq req);
    
    int deleteDomainBlockRecordById(Integer id);
    
    int updateDomainBlockRecordById(@Params("id") Integer id, @Params("req") UpdateDomainBlockRecordByIdReq req);
    
    DomainBlockRecord getDomainBlockRecordById(Integer id);
    
    List<DomainBlockRecord> getDomainBlockRecordList(GetDomainBlockRecordListReq req);   
}