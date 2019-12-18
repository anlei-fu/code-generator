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

@ApiModel("网站提取模型")
@Getter
@Setter
public class DomainModel {

    @ApiModelProperty("domainid")
    @NotNull
    private Integer domainId;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("模型")
    @NotNull
    private String model;

    @ApiModelProperty("任务id")
    @NotNull
@NotNull
    private Integer taskId;

}