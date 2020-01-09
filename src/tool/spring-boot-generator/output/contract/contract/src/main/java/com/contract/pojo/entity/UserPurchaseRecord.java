package com.contract.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class UserPurchaseRecord  {

    @ApiModelProperty("套餐合同份数")
    private Integer contractCount;

    @ApiModelProperty("合同类型")
    private Integer contractType;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("套餐编号")
    private Integer mealId;

    @ApiModelProperty("套餐价格")
    private Float mealPrice;

    @ApiModelProperty("合同份数(购买后)")
    private Integer purchaseAfter;

    @ApiModelProperty("合同份数(购买前)")
    private Integer purchaseBefore;

    @ApiModelProperty("用户编号")
    private Integer userId;

}
