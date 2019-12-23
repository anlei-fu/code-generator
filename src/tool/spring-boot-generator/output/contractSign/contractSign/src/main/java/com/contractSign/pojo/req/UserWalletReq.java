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
public class GetUserWalletListReq @extends {

    @ApiModelProperty("用户编号")
    private Integer userId;

    @ApiModelProperty("个人余额(份数)")
    private Integer personBalance;

    @ApiModelProperty("企业余额(份数)")
    private Integer companyBalance;

    @ApiModelProperty("创建时间")
    private Date createTime;

}