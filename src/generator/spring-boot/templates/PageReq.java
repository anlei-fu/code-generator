package com.@project.pojo.req;

import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class PageReq {

    @ApiModelProperty("index of page")
    @NotNull
    @Min(1)
    private Integer pageIndex=1;

    @ApiModelProperty("size of page")
    @NotNull
    @Min(5)
    @Max(200)
    private Integer pageSize=10;
}