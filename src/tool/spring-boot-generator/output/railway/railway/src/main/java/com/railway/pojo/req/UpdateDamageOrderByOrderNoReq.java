package com.railway.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class UpdateDamageOrderByOrderNoReq extends PageReq {

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("提交人")
    private Integer submitStaff;

    @ApiModelProperty("提交时间")
    private Date submitTime;

    @ApiModelProperty("探伤工区")
    private Integer workareaId;

}
