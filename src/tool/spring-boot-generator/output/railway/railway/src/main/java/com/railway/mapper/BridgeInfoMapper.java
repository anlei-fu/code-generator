package com.railway.mapper;

import com.railway.pojo.entity.BridgeInfo;
import com.railway.pojo.params.UpdateBridgeInfoByIdParams;
import com.railway.pojo.req.AddBridgeInfoReq;
import com.railway.pojo.req.GetBridgeInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface BridgeInfoMapper {
        
    int addBridgeInfo(AddBridgeInfoReq req);
    
        int deleteBridgeInfoById(@Params("id") Integer id);
    
        int updateBridgeInfoById(UpdateBridgeInfoByIdParams params);
    
        BridgeInfo getBridgeInfoById(@Params("id") Integer id);
    
        List<BridgeInfo> getBridgeInfoList(GetBridgeInfoListReq req);
   
}