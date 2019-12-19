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
public class AddBureauInfoReq @extends {

    @ApiModelProperty("铁路局编码")
    @NotNull
    private String bureauCode;

    @ApiModelProperty("铁路局名称")
    @NotNull
@NotNull
    private String bureauName;

    @ApiModelProperty("创建时间")
    @NotNull
@NotNull
    private Date createTime;

    @ApiModelProperty("输入代码")
    @NotNull
@NotNull
    private String inputCode;

    @ApiModelProperty("删除标记")
    @NotNull
@NotNull
@NotNull
    private Integer isDelete;

    @ApiModelProperty("操作人")
    @NotNull
@NotNull
@NotNull
    private Integer operator;

    @ApiModelProperty("更新时间")
    @NotNull
@NotNull
@NotNull
    private Date updateTime;

}