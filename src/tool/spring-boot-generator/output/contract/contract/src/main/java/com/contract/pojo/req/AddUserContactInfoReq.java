package com.contract.pojo.req;

import com.contract.validate.annotation.Email;
import com.contract.validate.annotation.Phone;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel("")
@Getter
@Setter
public class AddUserContactInfoReq extends PageReq {

    @ApiModelProperty("联系邮箱")
    @Email
    private String contractEmail;

    @ApiModelProperty("联系人")
    private String contractName;

    @ApiModelProperty("联系电话")
    @Phone
    private String contractPhone;

    @ApiModelProperty("用户编号")
    private Integer userId;

}
