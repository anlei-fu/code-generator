package com.test.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddDamageOrderReq @extends {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("提交人")
    @NotNull
    private Integer submitStaff;

    @ApiModelProperty("提交时间")
    @NotNull
    private Date submitTime;

    @ApiModelProperty("更新时间")
    @NotNull
    private Date updateTime;

    @ApiModelProperty("探伤工区")
    @NotNull
    private Integer workareaId;

}