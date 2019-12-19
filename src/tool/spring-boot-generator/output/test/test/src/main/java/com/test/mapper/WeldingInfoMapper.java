package com.test.mapper;

import com.test.pojo.req.AddWeldingInfoReq;
import com.test.pojo.req.GetWeldingInfoListReq;
import com.test.pojo.req.UpdateWeldingInfoByIdReq;
import com.test.pojo.entity.WeldingInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface WeldingInfoMapper {
        
    int addWeldingInfo(AddWeldingInfoReq req);
    
    int deleteWeldingInfoById(Integer id);
    
    int updateWeldingInfoById(@Params("id") Integer id, @Params("req") UpdateWeldingInfoByIdReq req);
    
    WeldingInfo getWeldingInfoById(Integer id);
    
    List<WeldingInfo> getWeldingInfoList(GetWeldingInfoListReq req);   
}