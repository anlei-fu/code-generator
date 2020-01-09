package com.contract.pojo.req;

import com.contract.validate.annotation.Enum;
import com.contract.validate.annotation.Url;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel("")
@Getter
@Setter
public class UpdateNotaryChannelByIdReq extends PageReq {

    @ApiModelProperty("接口key")
    private String apiKey;

    @ApiModelProperty("接口地址")
    @Url
    private String apiUrl;

    @ApiModelProperty("渠道名称")
    private String channelName;

    @ApiModelProperty("渠道备注")
    private String remark;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

}
