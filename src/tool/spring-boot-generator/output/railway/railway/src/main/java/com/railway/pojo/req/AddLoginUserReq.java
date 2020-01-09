package com.railway.pojo.req;

import com.railway.validate.annotation.Password;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel("")
@Getter
@Setter
public class AddLoginUserReq extends PageReq {

    @ApiModelProperty("名字")
    private String name;

    @ApiModelProperty("密码3")
    @Password
    private String password;

    @ApiModelProperty("")
    private String state;

    @ApiModelProperty("")
    private String type;

}
