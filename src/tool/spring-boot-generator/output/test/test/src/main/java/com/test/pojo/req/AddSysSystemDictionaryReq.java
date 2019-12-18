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
public class AddSysSystemDictionaryReq {

    @ApiModelProperty("")
    private String enumName;

    @ApiModelProperty("鏋氫妇绫诲瀷")
    private String enumType;

    @ApiModelProperty("鎺掑簭")
    private Integer sortId;

    @ApiModelProperty("鐘舵€?0-鍚敤,1-绂佺敤")
    private Integer status;

    @ApiModelProperty("浣跨敤绯荤粺")
    private Integer systemId;

    @ApiModelProperty("鏋氫妇椤瑰叿浣撳悕瀛?")
    private String text;

    @ApiModelProperty("鏋氫妇value")
    private String value;

}