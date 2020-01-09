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
public class GetUserPurchaseRecordListReq extends PageReq {

    @ApiModelProperty("套餐合同份数 min")
    private Integer contractCountMin;

    @ApiModelProperty("套餐合同份数 max")
    private Integer contractCountMax;

    @ApiModelProperty("合同类型")
    @Enum("contractType")
    private Integer contractType;

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("套餐编号")
    private Integer mealId;

    @ApiModelProperty("套餐价格 min")
    private Float mealPriceMin;

    @ApiModelProperty("套餐价格 max")
    private Float mealPriceMax;

    @ApiModelProperty("合同份数(购买后)")
    private Integer purchaseAfter;

    @ApiModelProperty("合同份数(购买前)")
    private Integer purchaseBefore;

    @ApiModelProperty("用户编号")
    private Integer userId;

}
