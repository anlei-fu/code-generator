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
public class GetMealConfigListReq extends PageReq {

    @ApiModelProperty("合同份数")
    private Integer contracts;

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("套餐折扣 min")
    private Float discountMin;

    @ApiModelProperty("套餐折扣 max")
    private Float discountMax;

    @ApiModelProperty("套餐类型")
    @Enum("mealType")
    private Integer mealType;

    @ApiModelProperty("套餐价格 min")
    private Float priceMin;

    @ApiModelProperty("套餐价格 max")
    private Float priceMax;

    @ApiModelProperty("套餐状态")
    @Enum("status")
    private Integer status;

}
