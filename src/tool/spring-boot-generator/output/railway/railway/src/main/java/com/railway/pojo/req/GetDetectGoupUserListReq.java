package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class GetDetectGoupUserListReq extends PageReq {

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("班组编号")
    private Integer groupId;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("成员编号")
    private Integer memberId;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

    @ApiModelProperty("更新时间")
    private Date updateTime;

}