package com.contractSign.pojo.entity;

@packages
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
@packages


@ApiModel("")
@Getter
@Setter
public class UserPurchaseRecord @extends {

    @ApiModelProperty("编号")
    private Integer id;

    @ApiModelProperty("用户编号")
    private Integer userId;

    @ApiModelProperty("合同类型")
    private Integer contractType;

    @ApiModelProperty("套餐编号")
    private Integer mealId;

    @ApiModelProperty("套餐价格")
    private Float mealPrice;

    @ApiModelProperty("套餐合同份数")
    private Integer contractCount;

    @ApiModelProperty("合同份数(购买前)")
    private Integer purchaseBefore;

    @ApiModelProperty("合同份数(购买后)")
    private Integer purchaseAfter;

    @ApiModelProperty("创建时间")
    private Date createTime;

}