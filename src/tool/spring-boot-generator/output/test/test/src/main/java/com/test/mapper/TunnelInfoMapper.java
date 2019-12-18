package com.undefined.mapper;

import com.undefined.pojo.entity.TunnelInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface TunnelInfoMapper {
        
    int addTunnelInfo(AddTunnelInfoReq req);
    
    int deleteTunnelInfoById(Integer id);
    
    int updateTunnelInfoById(@Params("id") Integer id, @Params("req") UpdateTunnelInfoByIdReq req);
    
    TunnelInfo getTunnelInfoById(Integer id);
    
    List<TunnelInfo> getTunnelInfoList(GetTunnelInfoListReq req);   
}