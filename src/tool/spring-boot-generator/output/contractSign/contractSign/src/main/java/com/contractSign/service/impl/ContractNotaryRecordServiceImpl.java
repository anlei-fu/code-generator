package com.contractSign.service;



public interface @nameService {

    boolean addContractNotaryRecord(AddContractNotaryRecordReq req);
    boolean deleteContractNotaryRecordById(Integer id);
    boolean updateContractNotaryRecordById(Integer id, UpdateContractNotaryRecordByIdReq req);
    ContractNotaryRecord getContractNotaryRecordById(Integer id);
    PageInfo<ContractNotaryRecord> getContractNotaryRecordList(GetContractNotaryRecordListReq req);

}