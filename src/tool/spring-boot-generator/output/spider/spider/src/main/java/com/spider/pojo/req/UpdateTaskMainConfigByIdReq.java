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
public class UpdateTaskMainConfigByIdReq {

    @ApiModelProperty("浏览器代理")
    private String agent;

    @ApiModelProperty("编码")
    private String encoding;

    @ApiModelProperty("pattern")
    private String pattern;

    @ApiModelProperty("脚本版本")
    private String scriptVersion;

    @ApiModelProperty("任务id")
    @NotNull
    private Integer taskId;

    @ApiModelProperty("超时")
    @NotNull
    private Integer timeout;

}