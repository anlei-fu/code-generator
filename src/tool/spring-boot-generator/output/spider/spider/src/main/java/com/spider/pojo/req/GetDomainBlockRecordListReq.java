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
public class GetDomainBlockRecordListReq {

    @ApiModelProperty("屏蔽时间")
    private Integer blockTime;

    @ApiModelProperty("网站id")
    @NotNull
    private Integer domainId;

    @ApiModelProperty("备注")
    @NotNull
    private String remark;

    @ApiModelProperty("任务id")
    @NotNull
@NotNull
    private Integer taskId;

    @ApiModelProperty("用户id")
    @NotNull
@NotNull
@NotNull
    private Integer userId;

    @ApiModelProperty("")
    @NotNull
@NotNull
@NotNull
@NotNull
    private Integer workerId;

}