package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@ApiModel("")
@Getter
@Setter
public class AddTrackInfoReq extends PageReq {

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("轨道编码")
    @NotNull
    private String trackCode;

    @ApiModelProperty("工务段编号")
    @NotNull
    private Integer trackDivisionId;

    @ApiModelProperty("钢轨类型")
    @Enum("trackType")
    private Integer trackType;

}
