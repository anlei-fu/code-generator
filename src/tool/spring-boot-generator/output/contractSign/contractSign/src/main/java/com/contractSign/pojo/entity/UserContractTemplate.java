package com.contractSign.pojo.entity;

@packages
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
@packages


@ApiModel("")
@Getter
@Setter
public class UserContractTemplate @extends {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("创建人编号")
    private Integer userId;

    @ApiModelProperty("模板归属类型")
    private Integer belongType;

    @ApiModelProperty("模板归属编号")
    private Integer belongId;

    @ApiModelProperty("合同名称")
    private String contractName;

    @ApiModelProperty("合同文件")
    private String contractFile;

    @ApiModelProperty("创建时间")
    private Date createTime;

}