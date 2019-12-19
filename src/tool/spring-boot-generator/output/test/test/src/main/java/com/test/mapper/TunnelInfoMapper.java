package com.test.mapper;

import com.test.pojo.req.AddTunnelInfoReq;
import com.test.pojo.req.GetTunnelInfoListReq;
import com.test.pojo.req.UpdateTunnelInfoByIdReq;
import com.test.pojo.entity.TunnelInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TunnelInfoMapper {
        
    int addTunnelInfo(AddTunnelInfoReq req);
    
    int deleteTunnelInfoById(Integer id);
    
    int updateTunnelInfoById(@Params("id") Integer id, @Params("req") UpdateTunnelInfoByIdReq req);
    
    TunnelInfo getTunnelInfoById(Integer id);
    
    List<TunnelInfo> getTunnelInfoList(GetTunnelInfoListReq req);   
}