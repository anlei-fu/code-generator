/*
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-12-17 09:09:58
 * @LastEditors  : fuanlei
 * @LastEditTime : 2019-12-18 14:55:53
 */
package com.undefined.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@import

@ApiModel("")
@Getter
@Setter
public class UpdateDetectGoupUserByIdReq {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("班组编号")
    private Integer groupId;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("成员编号")
    private Integer memberId;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("状态")
    private Integer status;

    @ApiModelProperty("更新时间")
    private Date updateTime;

}