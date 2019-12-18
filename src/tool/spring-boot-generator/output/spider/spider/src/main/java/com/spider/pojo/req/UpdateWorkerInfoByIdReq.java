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
public class UpdateWorkerInfoByIdReq {

    @ApiModelProperty("描述")
    private String description;

    @ApiModelProperty("ip")
    @NotNull
    private String ip;

    @ApiModelProperty("加入时间")
    @NotNull
    private Integer joinTime;

    @ApiModelProperty("最后运行时间")
    @NotNull
    private Integer lastRunTime;

}