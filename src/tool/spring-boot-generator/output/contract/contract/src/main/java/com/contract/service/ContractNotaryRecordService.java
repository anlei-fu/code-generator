package com.contract.service;

import com.contract.pojo.entity.ContractNotaryRecord;
import com.contract.pojo.req.AddContractNotaryRecordReq;
import com.contract.pojo.req.GetContractNotaryRecordListReq;
import com.contract.pojo.req.UpdateContractNotaryRecordByIdReq;
import com.github.pagehelper.PageInfo;

public interface ContractNotaryRecordService {

    boolean addContractNotaryRecord(AddContractNotaryRecordReq req);

    boolean deleteContractNotaryRecordById(Integer id);

    boolean updateContractNotaryRecordById(Integer id, UpdateContractNotaryRecordByIdReq req);

    ContractNotaryRecord getContractNotaryRecordById(Integer id);

    PageInfo<ContractNotaryRecord> getContractNotaryRecordList(GetContractNotaryRecordListReq req);

}
