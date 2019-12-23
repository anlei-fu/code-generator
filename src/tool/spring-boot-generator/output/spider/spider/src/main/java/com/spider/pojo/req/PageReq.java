package com.@project.pojo.req;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class PageReq {

    @ApiModelProperty("index of page")
    @NotNull
    private Integer pageIndex;

    @ApiModelProperty("size of page")
    @NotNull
    private Integer pageSize;
}