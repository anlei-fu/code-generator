package com.contract.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class GetUserWalletListReq extends PageReq {

    @ApiModelProperty("企业余额(份数)")
    private Integer companyBalance;

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("个人余额(份数)")
    private Integer personBalance;

    @ApiModelProperty("用户编号")
    private Integer userId;

}
