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

@ApiModel("铁路局信息")
@Getter
@Setter
public class BureauInfo {

    @ApiModelProperty("铁路局编码")
    private String bureauCode;

    @ApiModelProperty("铁路局名称")
    private String bureauName;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("铁路局编号")
    private Integer id;

    @ApiModelProperty("输入代码")
    private String inputCode;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("更新时间")
    private Date updateTime;

}