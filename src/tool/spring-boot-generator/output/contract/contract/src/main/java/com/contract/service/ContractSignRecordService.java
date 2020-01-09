package com.contract.service;

import com.contract.pojo.entity.ContractSignRecord;
import com.contract.pojo.req.AddContractSignRecordReq;
import com.contract.pojo.req.GetContractSignRecordListReq;
import com.contract.pojo.req.UpdateContractSignRecordByIdReq;
import com.github.pagehelper.PageInfo;

public interface ContractSignRecordService {

    boolean addContractSignRecord(AddContractSignRecordReq req);

    boolean deleteContractSignRecordById(Integer id);

    boolean updateContractSignRecordById(Integer id, UpdateContractSignRecordByIdReq req);

    ContractSignRecord getContractSignRecordById(Integer id);

    PageInfo<ContractSignRecord> getContractSignRecordList(GetContractSignRecordListReq req);

}
