package com.contract.pojo.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@ApiModel("")
@Getter
@Setter
public class MealConfig  {

    @ApiModelProperty("合同份数")
    private Integer contracts;

    @ApiModelProperty("创建时间")
    private Date createTime;

    @ApiModelProperty("套餐折扣")
    private Float discount;

    @ApiModelProperty("套餐编号")
    private Integer id;

    @ApiModelProperty("套餐名称")
    private String mealName;

    @ApiModelProperty("套餐类型")
    private Integer mealType;

    @ApiModelProperty("套餐价格")
    private Float price;

    @ApiModelProperty("套餐备注")
    private String remark;

    @ApiModelProperty("套餐状态")
    private Integer status;

}
