package com.railway.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("钢轨信息")
@Getter
@Setter
public class TrackInfo  {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("轨道编号")
    private Integer id;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("轨道编码")
    private String trackCode;

    @ApiModelProperty("工务段编号")
    private Integer trackDivisionId;

    @ApiModelProperty("钢轨类型")
    private Integer trackType;

    @ApiModelProperty("更新时间")
    private Date updateTime;

}
