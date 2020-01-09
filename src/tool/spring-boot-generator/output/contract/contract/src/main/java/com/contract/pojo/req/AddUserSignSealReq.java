package com.contract.pojo.req;

import com.contract.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel("")
@Getter
@Setter
public class AddUserSignSealReq extends PageReq {

    @ApiModelProperty("签章归属编号")
    private Integer belongId;

    @ApiModelProperty("签章归属类型")
    @Enum("belongType")
    private Integer belongType;

    @ApiModelProperty("签章名称")
    private String signName;

    @ApiModelProperty("签章图片")
    private String signPic;

    @ApiModelProperty("创建人编号")
    private Integer userId;

}
