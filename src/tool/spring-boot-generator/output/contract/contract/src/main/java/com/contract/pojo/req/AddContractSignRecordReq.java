package com.contract.pojo.req;

import com.contract.validate.annotation.Path;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel("")
@Getter
@Setter
public class AddContractSignRecordReq extends PageReq {

    @ApiModelProperty("合同编号")
    private Integer contractId;

    @ApiModelProperty("签署后合同")
    @Path
    private String signAfterFile;

    @ApiModelProperty("签署后Hash")
    private String signAfterHash;

    @ApiModelProperty("签署前合同")
    @Path
    private String signBeforeFile;

    @ApiModelProperty("签署前Hash")
    private String signBeforeHash;

    @ApiModelProperty("签约编号")
    private Integer signId;

    @ApiModelProperty("签署人")
    private String signPerson;

}
