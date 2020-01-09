package com.contract.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class UserContractTemplate  {

    @ApiModelProperty("模板归属编号")
    private Integer belongId;

    @ApiModelProperty("模板归属类型")
    private Integer belongType;

    @ApiModelProperty("合同文件")
    private String contractFile;

    @ApiModelProperty("合同名称")
    private String contractName;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("创建人编号")
    private Integer userId;

}
