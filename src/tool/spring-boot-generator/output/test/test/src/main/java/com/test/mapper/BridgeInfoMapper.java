package com.test.mapper;

import com.test.pojo.req.AddBridgeInfoReq;
import com.test.pojo.req.GetBridgeInfoListReq;
import com.test.pojo.req.UpdateBridgeInfoByIdReq;
import com.test.pojo.entity.BridgeInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface BridgeInfoMapper {
        
    int addBridgeInfo(AddBridgeInfoReq req);
    
    int deleteBridgeInfoById(Integer id);
    
    int updateBridgeInfoById(@Params("id") Integer id, @Params("req") UpdateBridgeInfoByIdReq req);
    
    BridgeInfo getBridgeInfoById(Integer id);
    
    List<BridgeInfo> getBridgeInfoList(GetBridgeInfoListReq req);   
}