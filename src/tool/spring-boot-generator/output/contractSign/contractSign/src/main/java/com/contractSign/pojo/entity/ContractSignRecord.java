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
public class ContractSignRecord @extends {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("合同编号")
    private Integer contractId;

    @ApiModelProperty("签约编号")
    private Integer signId;

    @ApiModelProperty("签署人")
    private String signPerson;

    @ApiModelProperty("签署前合同")
    private String signBeforeFile;

    @ApiModelProperty("签署前Hash")
    private String signBeforeHash;

    @ApiModelProperty("签署后合同")
    private String signAfterFile;

    @ApiModelProperty("签署后Hash")
    private String signAfterHash;

    @ApiModelProperty("创建时间")
    private Date createTime;

}