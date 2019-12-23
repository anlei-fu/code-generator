package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addContractNotaryRecord(@Params("req") AddContractNotaryRecordReq req);
        int deleteContractNotaryRecordById(Integer id);
        int updateContractNotaryRecordById(@Params("id") Integer id, @Params("req") UpdateContractNotaryRecordByIdReq req);
        ContractNotaryRecord getContractNotaryRecordById(Integer id);
        List<ContractNotaryRecord> getContractNotaryRecordList(@Params("req") GetContractNotaryRecordListReq req);
       
}