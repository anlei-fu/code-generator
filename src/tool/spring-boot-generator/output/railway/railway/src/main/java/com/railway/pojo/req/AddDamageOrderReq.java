package com.railway.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddDamageOrderReq extends PageReq {

    @ApiModelProperty("删除标记")
    @NotNull
    private Integer isDelete;

    @ApiModelProperty("提交人")
    private Integer submitStaff;

    @ApiModelProperty("提交时间")
    private Date submitTime;

    @ApiModelProperty("探伤工区")
    private Integer workareaId;

}