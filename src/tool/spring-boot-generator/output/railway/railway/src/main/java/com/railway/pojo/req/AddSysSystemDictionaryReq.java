package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;



@ApiModel("")
@Getter
@Setter
public class AddSysSystemDictionaryReq extends PageReq {

    @ApiModelProperty("")
    private String enumName;

    @ApiModelProperty("鏋氫妇绫诲瀷")
    @NotNull
    private String enumType;

    @ApiModelProperty("鎺掑簭")
    @NotNull
    private Integer sortId;

    @ApiModelProperty("鐘舵€?0-鍚敤,1-绂佺敤")
    @NotNull
    @Enum("status")
    private Integer status;

    @ApiModelProperty("浣跨敤绯荤粺")
    private Integer systemId;

    @ApiModelProperty("鏋氫妇椤瑰叿浣撳悕瀛?")
    @NotNull
    private String text;

    @ApiModelProperty("鏋氫妇value")
    @NotNull
    private String value;

}