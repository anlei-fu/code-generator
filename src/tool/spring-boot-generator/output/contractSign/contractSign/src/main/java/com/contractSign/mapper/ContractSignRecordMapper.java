package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addContractSignRecord(@Params("req") AddContractSignRecordReq req);
        int deleteContractSignRecordById(Integer id);
        int updateContractSignRecordById(@Params("id") Integer id, @Params("req") UpdateContractSignRecordByIdReq req);
        ContractSignRecord getContractSignRecordById(Integer id);
        List<ContractSignRecord> getContractSignRecordList(@Params("req") GetContractSignRecordListReq req);
       
}