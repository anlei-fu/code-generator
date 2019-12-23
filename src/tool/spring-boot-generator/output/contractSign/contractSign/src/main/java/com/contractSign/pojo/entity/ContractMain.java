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
public class ContractMain @extends {

    @ApiModelProperty("合同编号")
    private Integer id;

    @ApiModelProperty("合同发起人")
    private Integer userId;

    @ApiModelProperty("合同类型")
    private Integer contractType;

    @ApiModelProperty("合同标题")
    private String contractTitle;

    @ApiModelProperty("原始合同文件")
    private String rawContractFile;

    @ApiModelProperty("原始合同Hash")
    private String rawContractHash;

    @ApiModelProperty("签约截止日期")
    private Date signExpireTime;

    @ApiModelProperty("合同状态")
    private Integer contractState;

    @ApiModelProperty("签约合同文件")
    private String signContractFile;

    @ApiModelProperty("签约合同Hash")
    private String signContractHash;

    @ApiModelProperty("合同生效时间")
    private Date effectTime;

    @ApiModelProperty("合同失效时间")
    private Date expireTime;

    @ApiModelProperty("合同有效期")
    private Integer validPeriod;

    @ApiModelProperty("合同价格")
    private Integer contractPrice;

    @ApiModelProperty("创建时间")
    private Date createTime;

}