package com.undefined.mapper;

import com.undefined.pojo.entity.DealRecord;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DealRecordMapper {
        
    int addDealRecord(AddDealRecordReq req);
    
    int deleteDealRecordById(Integer id);
    
    int updateDealRecordById(@Params("id") Integer id, @Params("req") UpdateDealRecordByIdReq req);
    
    DealRecord getDealRecordById(Integer id);
    
    List<DealRecord> getDealRecordList(GetDealRecordListReq req);   
}