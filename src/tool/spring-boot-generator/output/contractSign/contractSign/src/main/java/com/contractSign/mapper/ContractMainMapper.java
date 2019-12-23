package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addContractMain(@Params("req") AddContractMainReq req);
        int deleteContractMainById(Integer id);
        int updateContractMainById(@Params("id") Integer id, @Params("req") UpdateContractMainByIdReq req);
        ContractMain getContractMainById(Integer id);
        List<ContractMain> getContractMainList(@Params("req") GetContractMainListReq req);
       
}