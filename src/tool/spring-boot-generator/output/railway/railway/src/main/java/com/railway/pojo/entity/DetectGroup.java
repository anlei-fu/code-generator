package com.railway.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("探伤班组信息")
@Getter
@Setter
public class DetectGroup  {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("班组名称")
    private String groupName;

    @ApiModelProperty("班组编号")
    private Integer id;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("班组组长")
    private Integer leaderId;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("状态")
    private Integer status;

    @ApiModelProperty("更新时间")
    private Date updateTime;

}
