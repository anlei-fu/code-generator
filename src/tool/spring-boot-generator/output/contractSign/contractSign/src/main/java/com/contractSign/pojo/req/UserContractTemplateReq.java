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
public class GetUserContractTemplateListReq @extends {

    @ApiModelProperty("创建人编号")
    private Integer userId;

    @ApiModelProperty("模板归属类型")
    private Integer belongType;

    @ApiModelProperty("模板归属编号")
    private Integer belongId;

    @ApiModelProperty("创建时间")
    private Date createTime;

}