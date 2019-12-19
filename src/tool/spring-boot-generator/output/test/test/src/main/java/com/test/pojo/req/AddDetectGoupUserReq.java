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
public class AddDetectGoupUserReq @extends {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("班组编号")
    private Integer groupId;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("成员编号")
    @NotNull
    private Integer memberId;

    @ApiModelProperty("操作人")
    @NotNull
    private Integer operator;

    @ApiModelProperty("状态")
    @NotNull
    private Integer status;

    @ApiModelProperty("更新时间")
    @NotNull
    private Date updateTime;

}