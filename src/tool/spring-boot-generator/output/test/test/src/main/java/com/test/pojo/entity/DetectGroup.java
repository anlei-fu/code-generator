package com.test.pojo.entity;

import com.test.pojo.entity.DetectGroup;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("探伤班组信息")
@Getter
@Setter
public class DetectGroup @extends {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("班组名称")
    private String groupName;

    @ApiModelProperty("班组编号")
    private Integer id;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("班组组长")
    @NotNull
    private Integer leaderId;

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