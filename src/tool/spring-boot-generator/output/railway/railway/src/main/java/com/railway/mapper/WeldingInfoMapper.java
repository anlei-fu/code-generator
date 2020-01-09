package com.railway.mapper;

import com.railway.pojo.entity.WeldingInfo;
import com.railway.pojo.param.UpdateWeldingInfoByIdParams;
import com.railway.pojo.req.AddWeldingInfoReq;
import com.railway.pojo.req.GetWeldingInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface WeldingInfoMapper {

    int addWeldingInfo(AddWeldingInfoReq req);

    int deleteWeldingInfoById(@Param("id") Integer id);

    int updateWeldingInfoById(UpdateWeldingInfoByIdParams params);

    WeldingInfo getWeldingInfoById(@Param("id") Integer id);

    List<WeldingInfo> getWeldingInfoList(GetWeldingInfoListReq req);

}
