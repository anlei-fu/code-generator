package com.contract.mapper;

import com.contract.pojo.entity.ContractNotaryRecord;
import com.contract.pojo.param.UpdateContractNotaryRecordByIdParams;
import com.contract.pojo.req.AddContractNotaryRecordReq;
import com.contract.pojo.req.GetContractNotaryRecordListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface ContractNotaryRecordMapper {

    int addContractNotaryRecord(AddContractNotaryRecordReq req);

    int deleteContractNotaryRecordById(@Param("id") Integer id);

    int updateContractNotaryRecordById(UpdateContractNotaryRecordByIdParams params);

    ContractNotaryRecord getContractNotaryRecordById(@Param("id") Integer id);

    List<ContractNotaryRecord> getContractNotaryRecordList(GetContractNotaryRecordListReq req);

}
