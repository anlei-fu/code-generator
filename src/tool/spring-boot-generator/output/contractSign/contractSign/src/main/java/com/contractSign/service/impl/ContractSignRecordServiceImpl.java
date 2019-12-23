package com.contractSign.service;



public interface @nameService {

    boolean addContractSignRecord(AddContractSignRecordReq req);
    boolean deleteContractSignRecordById(Integer id);
    boolean updateContractSignRecordById(Integer id, UpdateContractSignRecordByIdReq req);
    ContractSignRecord getContractSignRecordById(Integer id);
    PageInfo<ContractSignRecord> getContractSignRecordList(GetContractSignRecordListReq req);

}