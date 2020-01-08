package com.railway.pojo.req;

import com.railway.validate.annotation.Enum;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;



@ApiModel("")
@Getter
@Setter
public class GetTunnelInfoListReq extends PageReq {

    @ApiModelProperty("创建时间 start time")
    private Date createTimeStart;

    @ApiModelProperty("创建时间 end time")
    private Date createTimeEnd;

    @ApiModelProperty("行别")
    private Integer direction;

    @ApiModelProperty("终点里程")
    private Float endMiles;

    @ApiModelProperty("输入码")
    private String inputCode;

    @ApiModelProperty("删除标记")
    private Integer isDelete;

    @ApiModelProperty("全长")
    private Float length;

    @ApiModelProperty("线路编号")
    private Integer lineId;

    @ApiModelProperty("长链标记")
    private Integer longChain;

    @ApiModelProperty("中心里程")
    private Float middleMiles;

    @ApiModelProperty("操作人")
    private Integer operator;

    @ApiModelProperty("线别")
    private Integer side;

    @ApiModelProperty("起点里程")
    private Float startMiles;

    @ApiModelProperty("状态")
    @Enum("status")
    private Integer status;

    @ApiModelProperty("轨距")
    private Float trackDistance;

    @ApiModelProperty("工务段编号")
    private Integer trackDivisionId;

    @ApiModelProperty("隧道号")
    private String tunneNo;

    @ApiModelProperty("更新时间")
    private Date updateTime;

}