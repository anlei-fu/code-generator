package com.authority.pojo.req;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class UpdateSystemInfoByUserAndIdReq extends PageReq {

    @ApiModelProperty("name")
    private String name;

    @ApiModelProperty("description")
    private String description;

}