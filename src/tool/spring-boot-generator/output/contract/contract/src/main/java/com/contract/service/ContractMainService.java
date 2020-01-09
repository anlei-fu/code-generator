package com.contract.service;

import com.contract.pojo.entity.ContractMain;
import com.contract.pojo.req.AddContractMainReq;
import com.contract.pojo.req.GetContractMainListReq;
import com.contract.pojo.req.UpdateContractMainByIdReq;
import com.github.pagehelper.PageInfo;

public interface ContractMainService {

    boolean addContractMain(AddContractMainReq req);

    boolean deleteContractMainById(Integer id);

    boolean updateContractMainById(Integer id, UpdateContractMainByIdReq req);

    ContractMain getContractMainById(Integer id);

    PageInfo<ContractMain> getContractMainList(GetContractMainListReq req);

}
