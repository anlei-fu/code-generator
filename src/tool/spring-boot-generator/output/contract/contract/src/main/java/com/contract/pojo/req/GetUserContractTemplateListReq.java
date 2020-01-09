package com.contract.pojo.req;

import com.contract.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class GetUserContractTemplateListReq extends PageReq {

    @ApiModelProperty("模板归属编号")
    private Integer belongId;

    @ApiModelProperty("模板归属类型")
    @Enum("belongType")
    private Integer belongType;

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("创建人编号")
    private Integer userId;

}
