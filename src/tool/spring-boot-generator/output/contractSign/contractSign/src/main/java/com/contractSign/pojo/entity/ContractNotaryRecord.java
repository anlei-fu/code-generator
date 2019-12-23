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
public class ContractNotaryRecord @extends {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("合同编号")
    private Integer contractId;

    @ApiModelProperty("公证申请人")
    private Integer proposer;

    @ApiModelProperty("公证渠道")
    private Integer notaryChannel;

    @ApiModelProperty("公证状态")
    private Integer notaryStatus;

    @ApiModelProperty("公证发起时间")
    private Date notaryStartTime;

    @ApiModelProperty("公证完成时间")
    private Date notaryEndTime;

    @ApiModelProperty("创建时间")
    private Date createTime;

}