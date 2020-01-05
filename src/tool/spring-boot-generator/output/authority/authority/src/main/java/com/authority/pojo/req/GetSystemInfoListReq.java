package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class GetSystemInfoListReq extends PageReq {

    @ApiModelProperty("create time")
    private Date createTime;

    @ApiModelProperty("crceate user")
    private String createUser;

}