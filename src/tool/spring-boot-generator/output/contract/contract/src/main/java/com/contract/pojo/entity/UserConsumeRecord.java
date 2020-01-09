package com.contract.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class UserConsumeRecord  {

    @ApiModelProperty("账户编号")
    private Integer accountId;

    @ApiModelProperty("消费后剩余")
    private Integer consumeAfter;

    @ApiModelProperty("消费份数")
    private Integer consumeAmount;

    @ApiModelProperty("消费前剩余")
    private Integer consumeBefore;

    @ApiModelProperty("消费类型")
    private Integer consumeType;

    @ApiModelProperty("合同编号")
    private Integer contractId;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("备注")
    private String remark;

}
