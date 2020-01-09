package com.contract.service;

import com.contract.pojo.entity.ContractSign;
import com.contract.pojo.req.AddContractSignReq;
import com.contract.pojo.req.GetContractSignListReq;
import com.contract.pojo.req.UpdateContractSignByIdReq;
import com.github.pagehelper.PageInfo;

public interface ContractSignService {

    boolean addContractSign(AddContractSignReq req);

    boolean deleteContractSignById(Integer id);

    boolean updateContractSignById(Integer id, UpdateContractSignByIdReq req);

    ContractSign getContractSignById(Integer id);

    PageInfo<ContractSign> getContractSignList(GetContractSignListReq req);

}
