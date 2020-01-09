package com.contract.mapper;

import com.contract.pojo.entity.ContractMain;
import com.contract.pojo.param.UpdateContractMainByIdParams;
import com.contract.pojo.req.AddContractMainReq;
import com.contract.pojo.req.GetContractMainListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface ContractMainMapper {

    int addContractMain(AddContractMainReq req);

    int deleteContractMainById(@Param("id") Integer id);

    int updateContractMainById(UpdateContractMainByIdParams params);

    ContractMain getContractMainById(@Param("id") Integer id);

    List<ContractMain> getContractMainList(GetContractMainListReq req);

}
