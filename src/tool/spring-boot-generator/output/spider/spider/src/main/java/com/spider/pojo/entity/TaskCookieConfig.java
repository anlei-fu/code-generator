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

@ApiModel("任务cookie配置")
@Getter
@Setter
public class TaskCookieConfig {

    @ApiModelProperty("创建时间")
    private Integer createTime;

    @ApiModelProperty("网站id")
    @NotNull
    private Integer domainId;

    @ApiModelProperty("失效时间")
    @NotNull
    private Integer expiration;

    @ApiModelProperty("编号")
    @NotNull
    private Integer id;

    @ApiModelProperty("key")
    @NotNull
    private String key;

    @ApiModelProperty("主配置id")
    @NotNull
@NotNull
    private Integer taskConfigMainId;

    @ApiModelProperty("value")
    @NotNull
@NotNull
    private String value;

}