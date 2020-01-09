package com.contract.mapper;

import com.contract.pojo.entity.SystemContractTemplate;
import com.contract.pojo.param.UpdateSystemContractTemplateByContractFileParams;
import com.contract.pojo.req.AddSystemContractTemplateReq;
import com.contract.pojo.req.GetSystemContractTemplateListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface SystemContractTemplateMapper {

    int addSystemContractTemplate(AddSystemContractTemplateReq req);

    int deleteSystemContractTemplateByContractFile(@Param("contractFile") String contractFile);

    int updateSystemContractTemplateByContractFile(UpdateSystemContractTemplateByContractFileParams params);

    SystemContractTemplate getSystemContractTemplateByContractFile(@Param("contractFile") String contractFile);

    List<SystemContractTemplate> getSystemContractTemplateList(GetSystemContractTemplateListReq req);

}
