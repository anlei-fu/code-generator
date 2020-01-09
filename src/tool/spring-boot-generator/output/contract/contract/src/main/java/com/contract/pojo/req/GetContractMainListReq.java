package com.contract.pojo.req;

import com.contract.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class GetContractMainListReq extends PageReq {

    @ApiModelProperty("合同价格 min")
    private Integer contractPriceMin;

    @ApiModelProperty("合同价格 max")
    private Integer contractPriceMax;

    @ApiModelProperty("合同状态")
    @Enum("contractState")
    private Integer contractState;

    @ApiModelProperty("合同标题")
    private String contractTitle;

    @ApiModelProperty("合同类型")
    @Enum("contractType")
    private Integer contractType;

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("合同生效时间")
    private Date effectTime;

    @ApiModelProperty("合同失效时间")
    private Date expireTime;

    @ApiModelProperty("签约截止日期")
    private Date signExpireTime;

    @ApiModelProperty("合同发起人")
    private Integer userId;

    @ApiModelProperty("合同有效期")
    private Integer validPeriod;

}
