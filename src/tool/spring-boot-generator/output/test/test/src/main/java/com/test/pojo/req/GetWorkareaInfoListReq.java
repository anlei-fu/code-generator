package com.test.pojo.entity;

import com.test.pojo.entity.WorkareaInfo;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class GetWorkareaInfoListReq @extends {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("工区名称")
    @NotNull
    private String fullName;

    @ApiModelProperty("输入代码")
    @NotNull
    private String inputCode;

    @ApiModelProperty("删除标记")
    @NotNull
@NotNull
    private Integer isDelete;

    @ApiModelProperty("操作人")
    @NotNull
@NotNull
    private Integer operator;

    @ApiModelProperty("工区简称")
    @NotNull
@NotNull
@NotNull
    private String shortName;

    @ApiModelProperty("更新时间")
    @NotNull
@NotNull
@NotNull
    private Date updateTime;

    @ApiModelProperty("线路车间编号")
    @NotNull
@NotNull
@NotNull
@NotNull
    private Integer workshopId;

}