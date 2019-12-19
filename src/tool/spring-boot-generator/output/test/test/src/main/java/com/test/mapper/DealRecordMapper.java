package com.test.mapper;

import com.test.pojo.req.AddDealRecordReq;
import com.test.pojo.req.GetDealRecordListReq;
import com.test.pojo.req.UpdateDealRecordByIdReq;
import com.test.pojo.entity.DealRecord;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DealRecordMapper {
        
    int addDealRecord(AddDealRecordReq req);
    
    int deleteDealRecordById(Integer id);
    
    int updateDealRecordById(@Params("id") Integer id, @Params("req") UpdateDealRecordByIdReq req);
    
    DealRecord getDealRecordById(Integer id);
    
    List<DealRecord> getDealRecordList(GetDealRecordListReq req);   
}