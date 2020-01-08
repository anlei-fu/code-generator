package com.railway.mapper;

import com.railway.pojo.entity.DealRecord;
import com.railway.pojo.params.UpdateDealRecordByIdParams;
import com.railway.pojo.req.AddDealRecordReq;
import com.railway.pojo.req.GetDealRecordListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DealRecordMapper {
        
    int addDealRecord(AddDealRecordReq req);
    
        int deleteDealRecordById(@Params("id") Integer id);
    
        int updateDealRecordById(UpdateDealRecordByIdParams params);
    
        DealRecord getDealRecordById(@Params("id") Integer id);
    
        List<DealRecord> getDealRecordList(GetDealRecordListReq req);
   
}