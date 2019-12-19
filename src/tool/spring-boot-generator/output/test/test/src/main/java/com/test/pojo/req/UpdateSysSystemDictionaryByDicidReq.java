package com.test.pojo.entity;

import com.test.pojo.entity.SysSystemDictionary;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class UpdateSysSystemDictionaryByDicidReq @extends {

    @ApiModelProperty("")
    private String enumName;

    @ApiModelProperty("鏋氫妇绫诲瀷")
    @NotNull
    private String enumType;

    @ApiModelProperty("鎺掑簭")
    @NotNull
@NotNull
    private Integer sortId;

    @ApiModelProperty("鐘舵€?0-鍚敤,1-绂佺敤")
    @NotNull
@NotNull
@NotNull
    private Integer status;

    @ApiModelProperty("浣跨敤绯荤粺")
    @NotNull
@NotNull
@NotNull
    private Integer systemId;

    @ApiModelProperty("鏋氫妇椤瑰叿浣撳悕瀛?")
    @NotNull
@NotNull
@NotNull
@NotNull
    private String text;

    @ApiModelProperty("鏋氫妇value")
    @NotNull
@NotNull
@NotNull
@NotNull
@NotNull
    private String value;

}