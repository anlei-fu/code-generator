package com.contractSign.service;



public interface @nameService {

    boolean addContractMain(AddContractMainReq req);
    boolean deleteContractMainById(Integer id);
    boolean updateContractMainById(Integer id, UpdateContractMainByIdReq req);
    ContractMain getContractMainById(Integer id);
    PageInfo<ContractMain> getContractMainList(GetContractMainListReq req);

}