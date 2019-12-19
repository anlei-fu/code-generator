package com.test.pojo.entity;

import com.test.pojo.entity.DivisionUser;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class GetDivisionUserListReq @extends {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("工务段id")
    private Integer divisionId;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("更新时间")
    private Date updateTime;

    @ApiModelProperty("用户id")
    private Integer userId;

}