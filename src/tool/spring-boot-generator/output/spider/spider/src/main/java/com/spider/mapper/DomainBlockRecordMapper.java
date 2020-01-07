package com.spider.mapper;

import com.spider.pojo.entity.DomainBlockRecord;
import com.spider.pojo.req.AddDomainBlockRecordReq;
import com.spider.pojo.req.GetDomainBlockRecordListReq;
import com.spider.pojo.req.UpdateDomainBlockRecordByIdReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DomainBlockRecordMapper {
        
    int addDomainBlockRecord(AddDomainBlockRecordReq req);
    
        int deleteDomainBlockRecordById(@Params("id") Integer id);
    
        int updateDomainBlockRecordById(@Params("id") Integer id, @Params("req") UpdateDomainBlockRecordByIdReq req);
    
        DomainBlockRecord getDomainBlockRecordById(@Params("id") Integer id);
    
        List<DomainBlockRecord> getDomainBlockRecordList(GetDomainBlockRecordListReq req);
   
}