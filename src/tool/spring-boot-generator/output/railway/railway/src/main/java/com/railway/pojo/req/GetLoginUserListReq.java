package com.railway.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class GetLoginUserListReq extends PageReq {

    @ApiModelProperty(" start time")
    private Date createTimeStart;

    @ApiModelProperty(" end time")
    private Date createTimeEnd;

    @ApiModelProperty("")
    private String state;

    @ApiModelProperty("")
    private String type;

    @ApiModelProperty("")
    private Date updateTime;

}