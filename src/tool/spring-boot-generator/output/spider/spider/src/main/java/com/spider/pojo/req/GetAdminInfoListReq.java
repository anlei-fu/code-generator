package com.spider.pojo.req;

import com.spider.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class GetAdminInfoListReq extends PageReq {

    @ApiModelProperty("账号")
    private String account;

    @ApiModelProperty("权限等级")
    @Enum("level")
    private Integer level;

}