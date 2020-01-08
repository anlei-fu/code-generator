package com.spider.mapper;

import com.spider.pojo.entity.DomainBlockRecord;
import com.spider.pojo.params.UpdateDomainBlockRecordByIdParams;
import com.spider.pojo.req.AddDomainBlockRecordReq;
import com.spider.pojo.req.GetDomainBlockRecordListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DomainBlockRecordMapper {
        
    int addDomainBlockRecord(AddDomainBlockRecordReq req);
    
        int deleteDomainBlockRecordById(@Params("id") Integer id);
    
        int updateDomainBlockRecordById(UpdateDomainBlockRecordByIdParams params);
    
        DomainBlockRecord getDomainBlockRecordById(@Params("id") Integer id);
    
        List<DomainBlockRecord> getDomainBlockRecordList(GetDomainBlockRecordListReq req);
   
}