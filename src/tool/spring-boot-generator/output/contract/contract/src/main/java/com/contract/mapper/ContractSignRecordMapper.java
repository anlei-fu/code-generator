package com.contract.mapper;

import com.contract.pojo.entity.ContractSignRecord;
import com.contract.pojo.param.UpdateContractSignRecordByIdParams;
import com.contract.pojo.req.AddContractSignRecordReq;
import com.contract.pojo.req.GetContractSignRecordListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface ContractSignRecordMapper {

    int addContractSignRecord(AddContractSignRecordReq req);

    int deleteContractSignRecordById(@Param("id") Integer id);

    int updateContractSignRecordById(UpdateContractSignRecordByIdParams params);

    ContractSignRecord getContractSignRecordById(@Param("id") Integer id);

    List<ContractSignRecord> getContractSignRecordList(GetContractSignRecordListReq req);

}
