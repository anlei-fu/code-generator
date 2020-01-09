package com.contract.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel("")
@Getter
@Setter
public class UpdateUserWalletByIdReq extends PageReq {

    @ApiModelProperty("企业余额(份数)")
    private Integer companyBalance;

    @ApiModelProperty("个人余额(份数)")
    private Integer personBalance;

    @ApiModelProperty("用户编号")
    private Integer userId;

}
