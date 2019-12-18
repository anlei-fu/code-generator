package com.undefined.mapper;

import com.undefined.pojo.entity.BridgeInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface BridgeInfoMapper {
        
    int addBridgeInfo(AddBridgeInfoReq req);
    
    int deleteBridgeInfoById(Integer id);
    
    int updateBridgeInfoById(@Params("id") Integer id, @Params("req") UpdateBridgeInfoByIdReq req);
    
    BridgeInfo getBridgeInfoById(Integer id);
    
    List<BridgeInfo> getBridgeInfoList(GetBridgeInfoListReq req);   
}