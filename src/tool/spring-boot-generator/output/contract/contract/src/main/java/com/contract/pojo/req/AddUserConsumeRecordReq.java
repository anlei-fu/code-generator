package com.contract.pojo.req;

import com.contract.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel("")
@Getter
@Setter
public class AddUserConsumeRecordReq extends PageReq {

    @ApiModelProperty("账户编号")
    private Integer accountId;

    @ApiModelProperty("消费后剩余")
    private Integer consumeAfter;

    @ApiModelProperty("消费份数")
    private Integer consumeAmount;

    @ApiModelProperty("消费前剩余")
    private Integer consumeBefore;

    @ApiModelProperty("消费类型")
    @Enum("consumeType")
    private Integer consumeType;

    @ApiModelProperty("合同编号")
    private Integer contractId;

    @ApiModelProperty("备注")
    private String remark;

}
