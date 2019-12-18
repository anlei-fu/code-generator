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
public class GetDamageOrderListReq {

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("提交人")
    private Integer submitStaff;

    @ApiModelProperty("提交时间")
    private Date submitTime;

    @ApiModelProperty("更新时间")
    private Date updateTime;

    @ApiModelProperty("探伤工区")
    private Integer workareaId;

}