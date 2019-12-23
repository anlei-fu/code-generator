package com.contractSign.pojo.entity;

@packages
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
@packages


@ApiModel("")
@Getter
@Setter
public class GetSystemDictionaryListReq @extends {

    @ApiModelProperty("字典类型")
    private String type;

    @ApiModelProperty("字典值")
    private String value;

    @ApiModelProperty("字典排序")
    private Integer sortNum;

}