package com.railway.mapper;

import com.railway.pojo.entity.TunnelInfo;
import com.railway.pojo.params.UpdateTunnelInfoByIdParams;
import com.railway.pojo.req.AddTunnelInfoReq;
import com.railway.pojo.req.GetTunnelInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface TunnelInfoMapper {
        
    int addTunnelInfo(AddTunnelInfoReq req);
    
        int deleteTunnelInfoById(@Params("id") Integer id);
    
        int updateTunnelInfoById(UpdateTunnelInfoByIdParams params);
    
        TunnelInfo getTunnelInfoById(@Params("id") Integer id);
    
        List<TunnelInfo> getTunnelInfoList(GetTunnelInfoListReq req);
   
}