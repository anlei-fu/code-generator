package com.contract.mapper;

import com.contract.pojo.entity.UserContractTemplate;
import com.contract.pojo.param.UpdateUserContractTemplateByIdParams;
import com.contract.pojo.req.AddUserContractTemplateReq;
import com.contract.pojo.req.GetUserContractTemplateListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface UserContractTemplateMapper {

    int addUserContractTemplate(AddUserContractTemplateReq req);

    int deleteUserContractTemplateById(@Param("id") Integer id);

    int updateUserContractTemplateById(UpdateUserContractTemplateByIdParams params);

    UserContractTemplate getUserContractTemplateById(@Param("id") Integer id);

    List<UserContractTemplate> getUserContractTemplateList(GetUserContractTemplateListReq req);

}
