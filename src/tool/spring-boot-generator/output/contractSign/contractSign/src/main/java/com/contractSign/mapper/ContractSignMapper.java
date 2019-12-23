package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addContractSign(@Params("req") AddContractSignReq req);
        int deleteContractSignById(Integer id);
        int updateContractSignById(@Params("id") Integer id, @Params("req") UpdateContractSignByIdReq req);
        ContractSign getContractSignById(Integer id);
        List<ContractSign> getContractSignList(@Params("req") GetContractSignListReq req);
       
}