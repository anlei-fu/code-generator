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
public class GetTaskHttpHeaderConfigListReq {

    @ApiModelProperty("创建时间")
    private Integer createTime;

    @ApiModelProperty("key")
    private String key;

    @ApiModelProperty("主配置id")
    @NotNull
    private String taskConfigMainId;

    @ApiModelProperty("value")
    @NotNull
    private String value;

}