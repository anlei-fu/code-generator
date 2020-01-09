package com.contract.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class SystemContractTemplate  {

    @ApiModelProperty("合同内容")
    private String contractFile;

    @ApiModelProperty("合同名称")
    private String contractName;

    @ApiModelProperty("合同分类")
    private Integer contractType;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("编号")
    private Integer id;

}
