package com.contract.pojo.req;

import com.contract.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel("")
@Getter
@Setter
public class AddSystemContractTemplateReq extends PageReq {

    @ApiModelProperty("合同名称")
    private String contractName;

    @ApiModelProperty("合同分类")
    @Enum("contractType")
    private Integer contractType;

    @ApiModelProperty("编号")
    private Integer id;

}
