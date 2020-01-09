package com.contract.pojo.req;

import com.contract.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@ApiModel("")
@Getter
@Setter
public class AddMealConfigReq extends PageReq {

    @ApiModelProperty("合同份数")
    private Integer contracts;

    @ApiModelProperty("套餐折扣")
    private Float discount;

    @ApiModelProperty("套餐名称")
    private String mealName;

    @ApiModelProperty("套餐类型")
    @Enum("mealType")
    private Integer mealType;

    @ApiModelProperty("套餐价格")
    private Float price;

    @ApiModelProperty("套餐备注")
    private String remark;

    @ApiModelProperty("套餐状态")
    @Enum("status")
    private Integer status;

}
