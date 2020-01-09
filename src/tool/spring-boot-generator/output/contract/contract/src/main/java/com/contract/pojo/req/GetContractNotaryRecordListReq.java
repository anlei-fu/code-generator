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
public class GetContractNotaryRecordListReq extends PageReq {

    @ApiModelProperty("合同编号")
    private Integer contractId;

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("公证渠道")
    private Integer notaryChannel;

    @ApiModelProperty("公证完成时间")
    private Date notaryEndTime;

    @ApiModelProperty("公证发起时间")
    private Date notaryStartTime;

    @ApiModelProperty("公证状态")
    @Enum("notaryStatus")
    private Integer notaryStatus;

    @ApiModelProperty("公证申请人")
    private Integer proposer;

}
