package com.spider.pojo.req;

import com.spider.validate.annotation.Email;
import com.spider.validate.annotation.Phone;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@ApiModel("")
@Getter
@Setter
public class GetUserInfoListReq extends PageReq {

    @ApiModelProperty("电话")
    @Phone
    private String phoneNo;

    @ApiModelProperty("邮箱")
    @Email
    private String email;

    @ApiModelProperty("最后登陆时间")
    private Integer lastLoginTime;

    @ApiModelProperty("创建时间")
    private Integer createTime;

}