package com.authority.mapper;

import com.authority.pojo.entity.SystemInfo;
import com.authority.pojo.req.AddSystemInfoReq;
import com.authority.pojo.req.GetSystemInfoListReq;
import com.authority.pojo.req.UpdateSystemInfoByIdReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface SystemInfoMapper {
        
    int addSystemInfo(AddSystemInfoReq req);
    
        int deleteSystemInfoById(@Params("id") Integer id);
    
        int updateSystemInfoById(@Params("id") Integer id, @Params("req") UpdateSystemInfoByIdReq req);
    
        SystemInfo getSystemInfoById(@Params("id") Integer id);
    
        List<SystemInfo> getSystemInfoList(GetSystemInfoListReq req);
   
}