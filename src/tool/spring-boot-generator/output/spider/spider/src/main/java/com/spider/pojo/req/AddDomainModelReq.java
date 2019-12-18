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
public class AddDomainModelReq {

    @ApiModelProperty("domainid")
    @NotNull
    private Integer domainId;

    @ApiModelProperty("模型")
    @NotNull
    private String model;

    @ApiModelProperty("任务id")
    @NotNull
@NotNull
    private Integer taskId;

}