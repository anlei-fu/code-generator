package com.contractSign.service;



public interface @nameService {

    boolean addContractSign(AddContractSignReq req);
    boolean deleteContractSignById(Integer id);
    boolean updateContractSignById(Integer id, UpdateContractSignByIdReq req);
    ContractSign getContractSignById(Integer id);
    PageInfo<ContractSign> getContractSignList(GetContractSignListReq req);

}