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

@ApiModel("网站信息")
@Getter
@Setter
public class SiteInfo {

    @ApiModelProperty("描述")
    private String description;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("主站")
    private String mainDomain;

    @ApiModelProperty("网站类型")
    private String type;

}