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
public class SystemContractTemplate @extends {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("合同分类")
    private Integer contractType;

    @ApiModelProperty("合同名称")
    private String contractName;

    @ApiModelProperty("合同内容")
    private String contractFile;

    @ApiModelProperty("创建时间")
    private Date createTime;

}