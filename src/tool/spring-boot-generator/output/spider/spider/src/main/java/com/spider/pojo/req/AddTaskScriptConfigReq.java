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
public class AddTaskScriptConfigReq {

    @ApiModelProperty("创建时间")
    private String createTime;

    @ApiModelProperty("文件")
    private String file;

    @ApiModelProperty("这配置id")
    @NotNull
    private Integer taskConfigMainId;

    @ApiModelProperty("版本")
    @NotNull
@NotNull
    private Integer version;

}