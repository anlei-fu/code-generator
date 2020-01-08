package com.railway.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class SysSystemDictionary  {

    @ApiModelProperty("瀛楀吀Id")
    private Integer dicid;

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