package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addSystemContractTemplate(@Params("req") AddSystemContractTemplateReq req);
        int deleteSystemContractTemplateById(Integer id);
        int updateSystemContractTemplateById(@Params("id") Integer id, @Params("req") UpdateSystemContractTemplateByIdReq req);
        SystemContractTemplate getSystemContractTemplateById(Integer id);
        List<SystemContractTemplate> getSystemContractTemplateList(@Params("req") GetSystemContractTemplateListReq req);
       
}