package com.authority.mapper;

import com.authority.pojo.entity.SystemRoleInfo;
import com.authority.pojo.req.AddSystemRoleInfoReq;
import com.authority.pojo.req.GetSystemRoleInfoListReq;
import com.authority.pojo.req.UpdateSystemRoleInfoByIdReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface SystemRoleInfoMapper {
        
    int addSystemRoleInfo(AddSystemRoleInfoReq req);
    
        int deleteSystemRoleInfoById(@Params("id") Integer id);
    
        int updateSystemRoleInfoById(@Params("id") Integer id, @Params("req") UpdateSystemRoleInfoByIdReq req);
    
        SystemRoleInfo getSystemRoleInfoById(@Params("id") Integer id);
    
        List<SystemRoleInfo> getSystemRoleInfoList(GetSystemRoleInfoListReq req);
   
}