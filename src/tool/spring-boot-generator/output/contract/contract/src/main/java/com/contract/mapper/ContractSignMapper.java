package com.contract.mapper;

import com.contract.pojo.entity.ContractSign;
import com.contract.pojo.param.UpdateContractSignByIdParams;
import com.contract.pojo.req.AddContractSignReq;
import com.contract.pojo.req.GetContractSignListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface ContractSignMapper {

    int addContractSign(AddContractSignReq req);

    int deleteContractSignById(@Param("id") Integer id);

    int updateContractSignById(UpdateContractSignByIdParams params);

    ContractSign getContractSignById(@Param("id") Integer id);

    List<ContractSign> getContractSignList(GetContractSignListReq req);

}
