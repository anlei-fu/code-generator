package com.contract.pojo.req;

import com.contract.validate.annotation.Enum;
import com.contract.validate.annotation.Path;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel("")
@Getter
@Setter
public class UpdateUserContractTemplateByIdReq extends PageReq {

    @ApiModelProperty("模板归属编号")
    private Integer belongId;

    @ApiModelProperty("模板归属类型")
    @Enum("belongType")
    private Integer belongType;

    @ApiModelProperty("合同文件")
    @Path
    private String contractFile;

    @ApiModelProperty("合同名称")
    private String contractName;

    @ApiModelProperty("创建人编号")
    private Integer userId;

}
