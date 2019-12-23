package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addUserContractTemplate(@Params("req") AddUserContractTemplateReq req);
        int deleteUserContractTemplateById(Integer id);
        int updateUserContractTemplateById(@Params("id") Integer id, @Params("req") UpdateUserContractTemplateByIdReq req);
        UserContractTemplate getUserContractTemplateById(Integer id);
        List<UserContractTemplate> getUserContractTemplateList(@Params("req") GetUserContractTemplateListReq req);
       
}