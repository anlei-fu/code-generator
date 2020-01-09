package com.contract.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel("")
@Getter
@Setter
public class AddSystemDictionaryReq extends PageReq {

    @ApiModelProperty("字典备注")
    private String remark;

    @ApiModelProperty("字典排序")
    private Integer sortNum;

    @ApiModelProperty("字典类型")
    private String type;

    @ApiModelProperty("字典值")
    private String value;

}
