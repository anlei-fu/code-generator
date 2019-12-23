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
public class GetSystemContractTemplateListReq @extends {

    @ApiModelProperty("合同分类")
    private Integer contractType;

    @ApiModelProperty("创建时间")
    private Date createTime;

}