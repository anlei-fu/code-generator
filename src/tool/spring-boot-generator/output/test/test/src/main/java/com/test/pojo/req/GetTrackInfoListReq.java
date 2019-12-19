package com.test.pojo.entity;

import com.test.pojo.entity.TrackInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class GetTrackInfoListReq @extends {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("操作人")
    @NotNull
    private Integer operator;

    @ApiModelProperty("轨道编码")
    @NotNull
@NotNull
    private String trackCode;

    @ApiModelProperty("工务段编号")
    @NotNull
@NotNull
@NotNull
    private Integer trackDivisionId;

    @ApiModelProperty("钢轨类型")
    @NotNull
@NotNull
@NotNull
    private Integer trackType;

    @ApiModelProperty("更新时间")
    @NotNull
@NotNull
@NotNull
    private Date updateTime;

}